import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear login
    alert("Logged out successfully!");
    navigate("/Login", { replace: true }); // Redirect to login page
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/Home">Emergency-Widget</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Home/AboutUs">About Us</Nav.Link>
            <NavDropdown title="Emergency Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Home/ContactCard">Police</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Home/ContactCard">Medical Emergency</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Home/ContactCard">Woman Helpline</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Home/ContactCard">Fire Brigade</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Home/ContactCard">Pune Municipal Corporation</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
