import React from 'react';
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


const options = {
  backgroundColor: "rgba(0, 0, 0, 0.9)",

  
}

function Header() {
  return (
    <header> 
         <Navbar collapseOnSelect expand="lg" bg='black' variant="dark" className="py-4 border border-0 header" sticky='top' style={options}>
      <Container>
       <Navbar.Brand> <Link to='/'>Market Snipers Academy</Link> </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" variant='pills'>
            <LinkContainer to='/courses'>
              <Nav.Link href="#features">Courses</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/blog'>
              <Nav.Link href="#features">Blog</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header