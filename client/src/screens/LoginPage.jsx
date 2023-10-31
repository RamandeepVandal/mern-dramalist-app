import React, {useState} from "react";
// axios
import Axios from "axios";
// react cookie
import { useCookies } from "react-cookie";
// navigate
import { useNavigate } from "react-router-dom";
// component
import { Header } from "../components/Header";

export const LoginPage = () => {
  // user data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies("access_token");

  // navigation
  const navigate = useNavigate();
  // to the register page
  const toRegister = () => navigate("/register");

  // form submit
  const onSubmit = (e) => {
    e.preventDefault();

    loginAccount(email, password);
  };

  const loginAccount = async (email, password) => {
    try {
      const res = await Axios.post("http://localhost:5000/dramas/login", {
        email,
        password,
      });

      setCookies("access_token", res.data.token);
      // store the user id in local storage
      window.localStorage.setItem("userID", res.data.id);
      // login successful
      navigate("/drama");
    } catch (error) {
      console.log(error);
      alert("Login was unsuccessful.");
    }
  };

  return (
    <section>
      <Header />

      <section className="d-flex justify-content-center align-items-center flex-column m-5 p-5">
        <h1 className="">Login</h1>

        <section className="container">
          <section className="row">
            <section className="col-12 col-sm-12 col-md-12 col-lg-12">
              <form className="card form-card p-5 mt-2" onSubmit={onSubmit}>
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
                <button type="submit" className="btn btn-explore mt-1">
                  Login
                </button>
                <p
                  className="text-center mt-3 sign-in-up-link"
                  onClick={toRegister}
                >
                  Don't have an account? Register here.
                </p>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};
