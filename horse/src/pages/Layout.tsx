import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

export const Layout = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="fixed-top bg-body-tertiary">
        <Container>
          <Navbar.Brand className="text-uppercase">lóvé | a lovas web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className="home_link" to="/">Home</Link> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  )
};