import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
// react cookie
import { useCookies } from "react-cookie";

export const Header = () => {
  const [cookies, setCookies] = useCookies("access_token");

  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleClickDrama = () => navigate("/drama");
  const handleClickFindDramas = () => navigate("/find");
  const handleClickSearchDramas = () => navigate("/search");
  const handleClickLogin = () => navigate("/login");
  const handleClickRegister = () => navigate("/register");

  // logout
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate('/login');
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand
          className="nav-brand content-h-md nav-text"
          onClick={handleClick}
        >
          DramaList
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!cookies.access_token ? (
            <Nav className="ms-auto">
             <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClickLogin}
              >
                Login
              </Nav.Link>
              <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClickRegister}
              >
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClickDrama}
              >
                Dramas
              </Nav.Link>
              <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClickFindDramas}
              >
                Find Dramas
              </Nav.Link>
              <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClickSearchDramas}
              >
                Search Dramas
              </Nav.Link>
              <button className="btn btn-explore btn-md" onClick={logout}>
                Logout
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
