import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleClickDrama = () => navigate("/drama");
  const handleClickFindDramas = () => navigate("/find");
  const handleClickSearchDramas = () => navigate("/search");

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="nav-brand content-h-md nav-text" onClick={handleClick}>
          DramaList
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-5 content-p nav-text" onClick={handleClickDrama}>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
