import React, { useState, useEffect } from "react";
import Axios from "axios";
// react router
import { useNavigate } from "react-router-dom";
// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// bootstrap spinner
import Spinner from "react-bootstrap/Spinner";

export const SearchDramas = () => {
  // user query
  const [name, setName] = useState("");

  // dramas
  const [drama, setDrama] = useState([{}]);
  // loading
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  // page url
  const [url, setUrl] = useState('/search');

  useEffect(() => {
    setLoading(true);
    const DefaultName = "Game";
    getDrama(DefaultName);

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

  // get the drama
  const getDrama = async (name) => {
    // fetch the data
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${name}`,
      options
    );
    const data = await response.json();
    setDrama(data.results);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setSearchLoading(true);
    getDrama(name);

    setTimeout(() => {
      setSearchLoading(false);
    }, 500);
  };

  // Add drama to the db
  const addDrama = async (name, description, imgUrl, backdropURL, originCountry, firstAirDate, voteAverage) => {
    try {
      await Axios.post(
        "http://localhost:5000/dramas",
        {
          name: name,
          description: description,
          imgURL: imgUrl,
          backdropURL: backdropURL, 
          originCountry: originCountry,
          firstAirDate: firstAirDate,
          voteAverage: voteAverage
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
            <h1 className="sub-title">Search Dramas</h1>
            {/* FORM SECTION */}
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <form onSubmit={onSubmit} className="card form-card p-5 mt-2">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control form-control-search mb-3 shadow-none"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <button type="submit" className="btn btn-explore">
                      Search
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
                              className={
                                drama.length >= 2
                                  ? `col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch mb-4`
                                  : `col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-stretch mb-4`
                              }
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
                                        item?.first_air_date,
                                        item?.vote_average
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
