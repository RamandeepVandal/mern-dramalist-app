import React, { useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
// component
import { Header } from "../components/Header";

export const EditDramas = () => {
  // location -> pass data from dramalist page
  const location = useLocation();

  const [dramaName, setDramaName] = useState(location?.state?.data?.name);
  const [genre, setGenre] = useState(location?.state?.data?.genre);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.put(
        `http://localhost:5000/dramas/${location?.state?.data?._id}`,
        {
          name: dramaName,
          genre: genre,
        }
      );
      alert("Success!");
    } catch (error) {
      console.log(error);
    }

    // reset the states
    setDramaName("");
    setGenre([]);
  };

  return (
    <div>
      <Header />

      <section className="container d-flex justify-content-center align-items-center flex-column p-5 add-edit-drama">
        <h1>Edit Drama</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form className="card form-card p-5 mt-2" onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={dramaName}
                    onChange={(e) => setDramaName(e.target.value)}
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    name="genre"
                    id="genre"
                    className="form-control"
                    cols="50"
                    rows="10"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value.split(","))}
                  ></textarea>
                  <label htmlFor="genre">Genres</label>
                </div>
                <button type="submit" className="btn btn-explore btn-block">
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
