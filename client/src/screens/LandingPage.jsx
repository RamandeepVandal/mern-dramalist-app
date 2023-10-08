import React from "react";
import { useNavigate } from "react-router-dom";
// component
import { Header } from "../components/Header";
// image
import HeroImg from "../assets/hero-img.png";
import taskImg from "../assets/task.png";
import remoteTeam from "../assets/remote-team.png";
import supportTeam from "../assets/support-team.png";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  // Navigate to the dramalist page
  const navigate = useNavigate();
  const handleClickDramaList = () => navigate("/drama");
  const handleClickDramaFind = () => navigate("/find");
  const handleClickDramaSearch = () => navigate("/search");

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <Header />
        <div className="d-flex justify-content-between align-items-center text-center m-5 mt-1 p-5">
          <div className="text-center mt-5">
            <h1 className="fs-1">DramaList</h1>
            <p className="fs-3">
              Your personal drama library, Entertainment for everyone.
            </p>
            <button
              className="btn btn-lg ps-5 pe-5 mt-4 btn-explore"
              onClick={handleClickDramaList}
            >
              Explore
            </button>
          </div>

          <img
            className="img-fluid w-50 d-none d-lg-block"
            src={HeroImg}
            alt="hero placeholder"
          />
        </div>
      </section>

      {/* SERVICES/ABOUT SECTION */}
      <section className="about">
        <div className="d-flex flex-column justify-content-center pt-5">
          <h1 className="text-center mb-2" style={{ fontWeight: "bold" }}>
            Our Services
          </h1>

          <div className="d-flex justify-content-between align-items-center p-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="card container p-5 text-center find-card services-container">
                    <img
                      className="card-img-top"
                      src={supportTeam}
                      alt="add illustration"
                    />
                    <h1 className="fs-2">Find Dramas</h1>
                    <p>Create a collection of your favorite dramas.</p>
                    <button
                      className="btn btn-explore"
                      onClick={handleClickDramaFind}
                    >
                      Find Dramas
                    </button>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="card container p-5 text-center services-container">
                    <img
                      className="card-img-top"
                      src={taskImg}
                      alt="add illustration"
                    />
                    <h1 className="fs-2">Save Dramas</h1>
                    <p>Save your watched dramas to keep track.</p>
                    <button
                      className=" btn btn-explore"
                      onClick={handleClickDramaList}
                    >
                      View Dramas
                    </button>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="card container p-5 text-center find-card services-container">
                    <img
                      className="card-img-top"
                      src={remoteTeam}
                      alt="add illustration"
                    />
                    <h1 className="fs-2">Search Dramas</h1>
                    <p>Search for your favourite dramas on DramaList.</p>
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
      </section>

      {/* NEWSLETTER/CONTACT SECTION */}
      <section className="contact">
        <div className="container">
          <div className="justify-content-center align-items-center p-5">
            <h1 className="text-center">Get the latest</h1>
            <div className="d-flex m-5 sub-form">
              <input
                className="form-control p-3"
                type="text"
                placeholder="Subscribe to our newsletter"
              />
              <button className="btn btn-explore">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};
