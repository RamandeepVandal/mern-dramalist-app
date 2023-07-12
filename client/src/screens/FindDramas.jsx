import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const FindDramas = () => {
  // genre and year state
  const [genre, setGenre] = useState("Romance");
  const [yearDate, setYearDate] = useState("2023");

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
  const getDrama = async (yearDate, genre) => {
    // fetch the data
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?first_air_date_year=${yearDate}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=horror&with_original_language=ko`,
      options
    );
    const data = await response.json();
    setDrama(data.results);
  };

  // form onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    const newGenre = genre?.replaceAll(',', '%2C%20');
    getDrama(yearDate, newGenre )
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
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                  <label htmlFor="genre">Genres</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="year"
                    value={yearDate}
                    onChange={(e) => setYearDate(e.target.value)}
                  />
                  <label htmlFor="year">Year</label>
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
              {drama &&
                drama.map((item, key) => {
                  return (
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                      <div className="card find-card p-5 m-5 text-center" key={key}>
                        <img
                          src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                          alt="poster"
                          className="card-img-top img-fluid"
                        />
                        <p className="fs-4">{item?.name}</p>
                        <p>{item?.overview}</p>
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

/*
{drama.length > 0 ? drama.results.map((dramaItem, key) => {
            return (
              <div className="card" key={key}>
                <h1>{dramaItem?.name}</h1>
              </div>
            );
          }) : null}
*/
