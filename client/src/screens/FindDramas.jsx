import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const FindDramas = () => {
  return (
    <section>
      <Header />

      <section className="container d-flex justify-content-center align-items-center flex-column p-5 add-edit-drama">
        <h1>Find Dramas</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form className="card form-card p-5 mt-2">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" />
                  <label htmlFor="name">Genres</label>
                </div>
                <button type="submit" className="btn btn-explore">
                  Find
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </section>
  );
};
