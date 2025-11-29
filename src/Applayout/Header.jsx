import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    navigate("/Login", { replace: true });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Emergency-Widget</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <NavDropdown title="Emergency Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/ContactCard?category=Police">Police</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ContactCard?category=Medical">Medical Emergency</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ContactCard?category=Women">Woman Helpline</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ContactCard?category=Fire">Fire Brigade</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ContactCard?category=PMC">Pune Municipal Corporation</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={e => e.preventDefault()}>
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
