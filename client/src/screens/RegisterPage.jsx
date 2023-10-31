import React, { useState, useEffect } from "react";
// axios
import Axios from "axios";
// react navigation
import { useNavigate } from "react-router-dom";
// components
import { Header } from "../components/Header";

export const RegisterPage = () => {
  // user data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  // navigate to the login page
  const navigate = useNavigate();
  const toLogin = () => navigate("/login");

  // form submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== repass) {
      alert("Passwords don't match.");
    } else {
      registerAccount(name, email, password);
    }
  };

  // register accounts
  const registerAccount = async (name, email, password) => {
    await Axios.post("http://localhost:5000/dramas/register", {
      name,
      email,
      password,
    }).then((res) => {
      // if the registeration was successful
      if (res.data.message === "Account created!") {
        navigate("/login");
      } else {
        alert(res.data.error);
      }
    });
  };

  return (
    <section>
      <Header />

      <section className="d-flex justify-content-center align-items-center flex-column m-5 p-5">
        <h1>Register</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form className="card form-card p-5 mt-2" onSubmit={onSubmit}>
                <article className="form-floating  mb-3">
                  <input
                    type="text"
                    id="name"
                    placeholder="Please enter your name"
                    className="form-control form-control-search mb-1 shadow-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Name</label>
                </article>
                <article className="form-floating  mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Please enter your email"
                    className="form-control form-control-search mb-1 shadow-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </article>
                <article className="form-floating  mb-3">
                  <input
                    type="password"
                    id="password"
                    placeholder="Please enter your password"
                    className="form-control form-control-search mb-1 shadow-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </article>
                <article className="form-floating  mb-3">
                  <input
                    type="password"
                    id="repassword"
                    placeholder="Please re-enter your password"
                    className="form-control form-control-search mb-1 shadow-none"
                    value={repass}
                    onChange={(e) => setRepass(e.target.value)}
                  />
                  <label htmlFor="repassword">Re-enter Password</label>
                </article>
                <button type="submit" className="btn btn-explore mt-1">
                  Register
                </button>
                <p
                  className="text-center mt-3 sign-in-up-link"
                  onClick={toLogin}
                >
                  Already have an account? Login here.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
