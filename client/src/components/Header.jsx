import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleClickDrama = () => navigate("/drama");
  const handelClickAddDramas = () => navigate("/add");

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="nav-brand fs-4 nav-text" onClick={handleClick}>
          DramaList
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-5 fs-5 nav-text" onClick={handleClickDrama} >
              Dramas
            </Nav.Link>
            <Nav.Link className="me-5 fs-5 nav-text" onClick={handelClickAddDramas}>
              Add Dramas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
