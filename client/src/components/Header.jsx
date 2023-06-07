import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleClickDrama = () => navigate("/drama")
  const handelClickAddDramas = () => navigate("/add");

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="nav-brand" onClick={handleClick}>
          DramaList
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="me-3" onClick={handleClickDrama}>Dramas</Nav.Link>
          <Nav.Link className="me-3" onClick={handelClickAddDramas}>Add Dramas</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
