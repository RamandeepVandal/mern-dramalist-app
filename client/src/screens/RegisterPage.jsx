import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";

export const RegisterPage = () => {
  return (
    <section>
      <Header />

      <section className="d-flex justify-content-center align-items-center flex-column m-5 p-5">
        <h1>Register</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form className="card form-card p-5 mt-2">
                <article className="form-floating  mb-3">
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-search mb-1 shadow-none"
                  />
                  <label htmlFor="name">Name</label>
                </article>
                <article className="form-floating  mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-search mb-1 shadow-none"
                  />
                  <label htmlFor="email">Email</label>
                </article>
                <article className="form-floating  mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-search mb-1 shadow-none"
                  />
                  <label htmlFor="password">Password</label>
                </article>
                <article className="form-floating  mb-3">
                  <input
                    type="password"
                    id="repassword"
                    className="form-control form-control-search mb-1 shadow-none"
                  />
                  <label htmlFor="repassword">Re-enter Password</label>
                </article>
                <button type="submit" className="btn btn-explore mt-1">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
