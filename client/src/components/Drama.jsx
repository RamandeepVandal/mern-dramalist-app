import React from "react";
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

  // navigate to the edit page
  const navigate = useNavigate();
  const handleClickEditPage = (data) => navigate("/edit", { state: { data } });

  return (
    <>
      <div className="col-12 col-sm-6 col-md-10 col-lg-12">
        <section className="d-flex justify-content-center align-items-center flex-column">
          <div className="card container m-2 p-2 drama-container">
            <div className="d-flex align-items-center mb-2 container">
              <h1>{drama?.name}</h1>
              <div className="ms-auto">
                <button className="btn" onClick={() => deleteDrama(drama?._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#486fff"
                    className="bi bi-trash icon-img"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </button>
                <button
                  className="btn"
                  onClick={() => handleClickEditPage(drama)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#486fff"
                    className="bi bi-pencil icon-img"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="d-flex container">
              <div className="container">
                <div className="row">
                  {drama?.genre?.map((val) => {
                    return (
                      <div className="col-lg-auto col-md-4 col-12">
                        <p className="me-2 genre-tags p-2 card text-center">
                          {val}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
