import React from "react";
import { useNavigate } from "react-router-dom";
// component
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// background hero
import heroVideo from "../assets/hero-video.mp4";
// image
import watch from "../assets/watch.png";
import search from "../assets/search.png";
import save from "../assets/save.png";

export const LandingPage = () => {
  // Navigate to the dramalist page
  const navigate = useNavigate();
  const handleClickDramaList = () => navigate("/drama");
  const handleClickDramaFind = () => navigate("/find");
  const handleClickDramaSearch = () => navigate("/search");

  return (
    <div>
      {/* HERO SECTION */}
      <Header />
      <section className="hero">
        <video className="video-bg" id="video-bg" autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className=" hero-content d-flex justify-content-left align-items-center text-center m-5 p-5">
          <div className="text-center mt-5 pt-5">
            <h1>DramaList</h1>
            <p>Your personal drama library, Entertainment for everyone.</p>
            <button
              className="btn btn-lg ps-5 pe-5 mt-4 btn-explore"
              onClick={handleClickDramaList}
            >
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES/ABOUT SECTION */}
      <section className="about">
        <div className="d-flex flex-column justify-content-center pt-5">
          <h1
            className="text-center mb-2 sub-title"
            style={{ fontWeight: "bold" }}
          >
            Our Services
          </h1>

          <div className="d-flex justify-content-between align-items-center p-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-5">
                  <div className="card container h-100 p-5 text-center find-card services-container">
                    <img
                      className="card-img-top"
                      src={watch}
                      alt="add illustration"
                    />
                    <h1 className="fs-600">View Dramas</h1>
                    <p className="fs-400">
                      Create a collection of your favorite dramas.
                    </p>
                    <div className="card-footer mt-auto">
                      <button
                        className="btn btn-explore"
                        onClick={handleClickDramaFind}
                      >
                        Find Dramas
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-5">
                  <div className="card container h-100 p-5 text-center services-container">
                    <img
                      className="card-img-top"
                      src={save}
                      alt="add illustration"
                    />

                    <h1 className="fs-600">Save Dramas</h1>
                    <p className="fs-400">
                      Save your watched dramas to keep track.
                    </p>
                    <div className="card-footer mt-auto">
                      <button
                        className="btn btn-explore"
                        onClick={handleClickDramaList}
                      >
                        View Dramas
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-5">
                  <div className="card container h-100 p-5 text-center find-card services-container">
                    <img
                      className="card-img-top"
                      src={search}
                      alt="add illustration"
                    />

                    <h1 className="fs-600">Find Dramas</h1>
                    <p className="fs-400">
                      Search for your favourite dramas on DramaList.
                    </p>
                    <div className="card-footer mt-auto">
                      <button
                        className="btn btn-explore"
                        onClick={handleClickDramaSearch}
                      >
                        Search Dramas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER/CONTACT SECTION */}
      <section className="contact">
        <div className="container">
          <div className="justify-content-center align-items-center p-5">
            <h1 className="text-center sub-title">Get the latest</h1>
            <div className="d-flex m-5 sub-form">
              <input
                className="form-control p-3 shadow-none"
                type="text"
                placeholder="Subscribe to our newsletter"
              />
              <button className="btn btn-explore p-3">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};
