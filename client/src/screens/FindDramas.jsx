import React, { useState, useEffect } from "react";
import Axios from "axios";
// react router
import { useNavigate } from "react-router-dom";
// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// bootstrap spinner
import Spinner from "react-bootstrap/Spinner";

export const FindDramas = () => {
  // genre and year state
  const [genre, setGenre] = useState(10759);
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState("en");

  // dramas
  const [drama, setDrama] = useState([{}]);
  // loading
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  // page url
  const [url, setUrl] = useState('/find');

  useEffect(() => {
    setLoading(true);
    getDrama(genre, page, lang);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

    setSearchLoading(true);
    getDrama(genre, page, lang);

    setTimeout(() => {
      setSearchLoading(false);
    }, 500);
  };

  // Add drama to the db
  const addDrama = async (name, description, imgUrl, backdropURL, originCountry, firstAirDate) => {
    try {
      await Axios.post(
        "http://localhost:5000/dramas",
        {
          name: name,
          description: description,
          imgURL: imgUrl,
          backdropURL: backdropURL, 
          originCountry: originCountry,
          firstAirDate: firstAirDate
        },
        { crossDomain: true }
      );
      alert("Success!");
    } catch (error) {
      console.log(error);
    }
  };

  // navigation
  const navigation = useNavigate();
  const toDetails = (data, url) => navigation('/details', { state: { data, url } });

  return (
    <section>
      {loading ? (
        <div>
          <Header />
          <div className="App">
            <Spinner
              animation="border"
              role="status"
              variant="success"
              size="lg"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div>
          <Header />

          <section className="container d-flex justify-content-center align-items-center flex-column p-5 add-edit-drama find-section">
            <h1 className="sub-title">Find Dramas</h1>
            {/* FORM SECTION */}
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <form onSubmit={onSubmit} className="card form-card p-5 mt-2">
                    <div className="form-floating mb-3">
                      <select
                        className="form-select mb-3 shadow-none"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                      >
                        <option value="10759">Action & Adventure</option>
                        <option value="35">Comedy</option>
                        <option value="80">Crime</option>
                        <option value="18">Drama</option>
                        <option value="10751">Family</option>
                        <option value="9648">Mystery</option>
                        <option value="10765">Sci-Fi & Fantasy</option>
                        <option value="10766">Soap</option>
                      </select>
                      <label className="form-label" htmlFor="genre">
                        Genres
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        className="form-select mb-3 shadow-none"
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
                      <label className="form-label" htmlFor="page">
                        Page
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        className="form-select mb-3 shadow-none"
                        id="lang"
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                      >
                        <option value="ko">Korean</option>
                        <option value="en">English</option>
                        <option value="ja">Japanese</option>
                        <option value="es">Spanish</option>
                        <option value="hi">Hindi</option>
                      </select>
                      <label className="form-label" htmlFor="lang">
                        Language
                      </label>
                    </div>
                    <button type="submit" className="btn btn-explore">
                      Find
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {searchLoading ? (
              <div className="App">
                <Spinner
                  animation="border"
                  role="status"
                  variant="success"
                  size="lg"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <div>
                {/* SHOW DRAMA RESULTS SECTION */}
                <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">
                  <div className="container">
                    <div className="row">
                      {drama &&
                        drama.map((item, key) => {
                          return (
                            <div
                              className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch mb-4"
                              key={key}
                            >
                              <div className="card find-card p-5 text-center w-100">
                                <img
                                  src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                                  alt="poster"
                                  className="card-img-top-drama img-fluid click-img"
                                  loading="lazy"
                                  onClick={() => toDetails(item, url)}
                                />
                                <p className="content-h-md mt-2">{item?.name}</p>

                                <div className="card-footer mt-auto">
                                  <button
                                    className="btn btn-explore btn-lg"
                                    onClick={() =>
                                      addDrama(
                                        item?.name,
                                        item?.overview,
                                        item?.poster_path,
                                        item?.backdrop_path,
                                        item?.origin_country[0],
                                        item?.first_air_date
                                      )
                                    }
                                  >
                                    Add to list
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* FOOTER SECTION */}
          <Footer />
        </div>
      )}
    </section>
  );
};
