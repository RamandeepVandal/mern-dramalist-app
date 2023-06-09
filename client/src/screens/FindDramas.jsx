import React, { useState, useEffect } from "react";
import Axios from 'axios';
// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const FindDramas = () => {
  // genre and year state
  const [genre, setGenre] = useState(10759);
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState("ko");

  // dramas
  const [drama, setDrama] = useState([{}]);

  useEffect(() => {
    getDrama();
  }, []);

  // set the auth key
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_APP_DRAMA_AUTH,
    },
  };

  // GET the dramas
  const getDrama = async (genre, page, lang) => {
    // fetch the data
    const response = await fetch(
      //&first_air_date_year=${yearDate}
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}&with_original_language=${lang}&without_genres=16,99,10764,10763,10767,10762`,
      options
    );
    const data = await response.json();
    setDrama(data.results);
  };

  // form onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    getDrama(genre, page, lang);
  };

  // Add drama to the db
  const addDrama = async(name, description, imgUrl) => {
    try {
      await Axios.post("http://localhost:5000/dramas", {
        name: name,
        description: description,
        imgURL: imgUrl
      }, { crossDomain: true });
      alert("Success!");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <section>
      <Header />

      <section className="container d-flex justify-content-center align-items-center flex-column p-5 add-edit-drama find-section">
        <h1>Find Dramas</h1>
        {/* FORM SECTION */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form onSubmit={onSubmit} className="card form-card p-5 mt-2">
                <div className="form-floating mb-3">
                  <select
                    class="form-select mb-3"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option value="10759">Action & Adventure</option>
                    <option value="10749">Romance</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="9648">Mystery</option>
                    <option value="10765">Sci-Fi & Fantasy</option>
                    <option value="10766">Soap</option>
                  </select>
                  <label htmlFor="genre">Genres</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    class="form-select mb-3"
                    id="page"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                  </select>
                  <label htmlFor="page">Page</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    class="form-select mb-3"
                    id="lang"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                  >
                    <option value="ko">Korean</option>
                    <option value="en">English</option>
                  </select>
                  <label htmlFor="lang">Language</label>
                </div>
                <button type="submit" className="btn btn-explore">
                  Find
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SHOW DRAMA RESULTS SECTION */}
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              {console.log(drama)}
              {drama &&
                drama.map((item, key) => {
                  return (
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                      <div
                        className="card find-card p-5 m-5 text-center"
                        key={key}
                      >
                        <img
                          src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                          alt="poster"
                          className="card-img-top img-fluid"
                          loading="lazy"
                        />
                        <p className="fs-4">{item?.name}</p>
                        <p>{item?.overview}</p>

                        <button className="btn btn-explore" onClick={() => addDrama(item?.name, item?.overview, item?.poster_path)}>Add to list</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </section>
  );
};