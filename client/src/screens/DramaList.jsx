import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Dramas } from "../components/Dramas";

export const DramaList = () => {
  // dramas
  const [dramas, setDramas] = useState([{
    name: 'One Spring Night',
    description: 'When Lee Jeong-in and Yu Ji-ho meet, something unexpected happens. Or it just may be that spring is in the air -- and anything is possible.',
    imgURL: '/kFEIbuGVbIDQ5GPOWdw6heZVXKC.jpg'
  }]);

  // get the data
  useEffect(() => {
    const getDramas = async () => {
      const res = await fetch("http://localhost:5000/dramas");
      const data = await res.json();
      setDramas(data);
    };

    getDramas();
  }, []);

  // filter drama on delete
  const filterDrama = (id) => {
    setDramas((dramas) => dramas.filter((drama) => drama._id !== id));
  };

  return (
    <div>
      <Header />
      <Dramas dramas={dramas} filterDrama={filterDrama} />
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};
