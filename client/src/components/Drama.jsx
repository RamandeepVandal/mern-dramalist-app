import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Drama = ({ drama, filterDrama }) => {
  const deleteDrama = async (id) => {
    try {
      await Axios.delete(`http://localhost:5000/dramas/${id}`);
      // filter drama
      await filterDrama(id);

      alert("Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  // page url
  const [url, setUrl] = useState("/drama");

  // navigate to dramaDetails
  const navigation = useNavigate();
  const toDetails = (data, url) => {
    navigation("/userdrama", { state: { data, url } });
  };

  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch mb-4">
        <div className="card find-card p-5 text-center w-100">
          <img
            src={`http://image.tmdb.org/t/p/w500/${drama?.imgURL}`}
            alt="poster"
            className="card-img-top-drama img-fluid click-img"
            loading="lazy"
            onClick={() => toDetails(drama, url)}
          />
          <div className="d-flex align-items-center mt-3 container">
            <h1 className="content-h-md">{drama?.name}</h1>
            <div className="ms-auto">
              <button className="btn" onClick={() => deleteDrama(drama?._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#486fff"
                  className="bi bi-trash icon-img icon-img-delete"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* 

<p>{drama?.description}</p> 
*/
