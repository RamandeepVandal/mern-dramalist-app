import React, { useState } from "react";
import Axios from "axios";
import { Header } from "../components/Header";

export const AddDramas = () => {
  const [dramaName, setDramaName] = useState("");
  const [genre, setGenre] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:5000/dramas", {
        name: dramaName,
        genre: genre,
      });
      alert('Success!');
    } catch (error) {
      console.log(error);
    }

    // reset the states
    setDramaName('');
    setGenre([]);
  };

  return (
    <div>
      <Header />

      <section className="container d-flex justify-content-center align-items-center flex-column m-3 p-5 add-edit-drama">
        <h1>Add Dramas</h1>
        <form className="card p-5 mt-2" onSubmit={onSubmit}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" value={dramaName} onChange={e => setDramaName(e.target.value)}/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              name="genre"
              id="genre"
              className="form-control"
              cols="30"
              rows="5"
              value={genre}
              onChange={e => setGenre(e.target.value.split(','))}
            ></textarea>    
            <label htmlFor="genre">Genres</label>
          </div>
          <button type="submit" className="btn btn-explore btn-block">
            Add
          </button>
        </form>
      </section>
    </div>
  );
};
