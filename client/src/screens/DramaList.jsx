import React, { useState, useEffect } from "react";
// axios
import Axios from "axios";
// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Dramas } from "../components/Dramas";
// bootstrap spinner
import Spinner from "react-bootstrap/Spinner";
// get user id -> user id hook
import { getUserID } from "../hooks/getUserID";
// navigate
import { useNavigate } from "react-router-dom";

export const DramaList = () => {
  // user id
  const userID = getUserID();
  // dramas
  const [dramas, setDramas] = useState([]);
  // loading
  const [loading, setLoading] = useState(false);

  // get the data
  useEffect(() => {
    setLoading(true);
    getDramas(userID);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // get data
  const getDramas = async (id) => {
    await Axios.post("http://localhost:5000/dramas", {
      id,
    }).then((res) => {
      setDramas(res.data);
    });
  };

  // filter drama on delete
  const filterDrama = (id) => {
    setDramas((dramas) => dramas.filter((drama) => drama._id !== id));
  };

   // navigation
   const navigate = useNavigate();
   // to the register page
   const toFind = () => navigate("/find");

  return (
    <div>
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
          {dramas.length < 2 ? (
            <section className="no-drama-show d-flex flex-column justify-content-center align-items-center">
              <h1>No dramas to show.</h1>
              <h2
                className="text-center mt-3 find-dramas"
                onClick={toFind}
              >
                Find dramas here.
              </h2>
            </section>
          ) : (
            <Dramas dramas={dramas} filterDrama={filterDrama} />
          )}
          {/* FOOTER SECTION */}
          <Footer />
        </div>
      )}
    </div>
  );
};
