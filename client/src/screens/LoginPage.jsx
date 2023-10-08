import React from "react";
import { Header } from "../components/Header";

export const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Header />

      <section className="login">
        <section className="d-flex justify-content-center align-items-center m-5 p-5">
          <section className="container">
            <section className="row">
              <section className="col-12 col-sm-12 col-md-12 col-lg-12">
                <form className="card m-2 p-3" onSubmit={onSubmit}>
                  <article className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Please enter your email"
                      className="form-control"
                    />
                  </article>
                  <article className="form-group">
                    <label htmlFor="password" className="form-label mt-3">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Please enter your password"
                      className="form-control"
                    />
                  </article>
                  <button type="submit" className="btn btn-explore mt-3">
                    Login
                  </button>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};
