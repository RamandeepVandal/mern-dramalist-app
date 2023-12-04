import React, { useState, useEffect } from "react";
import Axios from "axios";
// react router
import { useLocation } from "react-router-dom";
// get user id hook
import { getUserID } from "../hooks/getUserID";
// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// bootstrap spinner
import Spinner from "react-bootstrap/Spinner";

export const DramaDetails = () => {
  // userID
  const userID = getUserID();

  // location
  const location = useLocation();

  // drama
  const [drama, setDrama] = useState(location?.state?.data);
  const [savedDramaUser, setSavedDramaUser] = useState(userID);
  // loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Add drama to the db
  const addDrama = async (
    name,
    description,
    imgURL,
    backdropURL,
    originCountry,
    firstAirDate,
    voteAverage,
    savedDramaUser
  ) => {
    await Axios.post("http://localhost:5000/dramas/add", {
      name,
      description,
      imgURL,
      backdropURL,
      originCountry,
      firstAirDate,
      voteAverage,
      savedDramaUser,
    }).then((res) => {
      if (res.data.status === "ok") {
        alert("Success!");
      }
    });
  };

  return (
    <>
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
        <section
          className="details"
          style={{
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.65), 
                rgba(0, 0, 0, 0.65)
              ), url(https://image.tmdb.org/t/p/original/${drama.backdrop_path})`,
          }}
        >
          <Header />

          <section className="container">
            <div className="details-section d-flex justify-content-between align-items-start m-5 p-5">
              <img
                src={`http://image.tmdb.org/t/p/w500/${drama.poster_path}`}
                alt="poster"
                className="img-fluid details-img"
                loading="lazy"
              />
              <div className="d-flex flex-column detail-container">
                <h1 className="content-p details-text">{drama.name}</h1>
                <div className="d-flex flex-row align-items-center details-text">
                  <p>
                    {drama.first_air_date} ({drama.origin_country})
                  </p>
                  <p className="details-rating content-p-sm">
                    {drama.vote_average}{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 21 21"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                  </p>
                </div>

                <div className="mt-5 details-text">
                  <h2 className="content-p">Overview</h2>
                  <p className="content-p-sm">{drama.overview}</p>
                </div>

                <button
                  className="btn btn-explore btn-lg"
                  onClick={() =>
                    addDrama(
                      drama?.name,
                      drama?.overview,
                      drama?.poster_path,
                      drama?.backdrop_path,
                      drama?.origin_country[0],
                      drama?.first_air_date,
                      drama?.vote_average,
                      savedDramaUser
                    )
                  }
                >
                  Add to list
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </section>
      )}
    </>
  );
};
