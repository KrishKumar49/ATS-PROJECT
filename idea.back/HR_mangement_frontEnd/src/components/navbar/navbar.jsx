import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              onClick={() => navigate(-1)} 
              className="back-button">Back</Nav.Link>
          </Nav>
          {/* <Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reports">Reports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
