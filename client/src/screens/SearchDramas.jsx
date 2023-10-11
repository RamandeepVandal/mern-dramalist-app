import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const SearchDramas = () => {
  // user query
  const [name, setName] = useState("");

  // dramas
  const [drama, setDrama] = useState([{}]);

  useEffect(() => {
    const DefaultName = 'Game';
    getDrama(DefaultName);
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

    getDrama(name);
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
        <h1>Search Dramas</h1>
        {/* FORM SECTION */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form onSubmit={onSubmit} className="card form-card p-5 mt-2">
                <div className="form-floating mb-3">
                  <input
                    className="form-control mb-3"
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

        {/* SHOW DRAMA RESULTS SECTION */}
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              {drama &&
                drama.map((item, key) => {
                  return (
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch" key={key}>
                      <div
                        className="card find-card p-5 m-5 text-center w-100"
                      >
                        <img
                          src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                          alt="poster"
                          className="card-img-top img-fluid"
                          loading="lazy"
                        />
                        <p className="fs-4">{item?.name}</p>

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
