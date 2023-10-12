import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Dramas } from "../components/Dramas";
// bootstrap spinner
import Spinner from "react-bootstrap/Spinner";

export const DramaList = () => {
  // dramas
  const [dramas, setDramas] = useState([
    {
      name: "One Spring Night",
      description:
        "When Lee Jeong-in and Yu Ji-ho meet, something unexpected happens. Or it just may be that spring is in the air -- and anything is possible.",
      imgURL: "/kFEIbuGVbIDQ5GPOWdw6heZVXKC.jpg",
    },
  ]);
  // loading
  const [loading, setLoading] = useState(false);

  // get the data
  useEffect(() => {
    setLoading(true);
    getDramas();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // get data
  const getDramas = async () => {
    const res = await fetch("http://localhost:5000/dramas");
    const data = await res.json();
    setDramas(data);
  };

  // filter drama on delete
  const filterDrama = (id) => {
    setDramas((dramas) => dramas.filter((drama) => drama._id !== id));
  };

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
          <Dramas dramas={dramas} filterDrama={filterDrama} />
          {/* FOOTER SECTION */}
          <Footer />
        </div>
      )}
    </div>
  );
};
