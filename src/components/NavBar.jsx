import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="my-bg px-2">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img src="/assets/images/images.png" alt="" id="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-between"
            >
              <Nav className="d-none d-lg-flex ">
                <Link to="/" className="nav-link text-white fw-bold">
                  Home
                </Link>
                <Link className="nav-link" to="/TvShows">
                  TV-Shows
                </Link>
                <Link className="nav-link" to="#">
                  Movies
                </Link>
                <Link className="nav-link" to="#">
                  Recently Added
                </Link>
                <Link className="nav-link" to="#">
                  My List
                </Link>
              </Nav>
              <Nav className="d-none  d-lg-flex">
                <Nav.Link>
                  <Search className="fs-5 text-white" />
                </Nav.Link>
                <Nav.Link className="text-white">KIDS</Nav.Link>
                <Nav.Link>
                  <Bell className="fs-5 text-white" />
                </Nav.Link>
                <Link className="nav-link" to="/Settings">
                  <PersonCircle className="fs-5 text-white" />
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
