import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';


function Header() {
  return (
    <header> 
        <Navbar bg="black" variant= "dark" expand='lg' className="py-4 border border-0">
          <Container fluid>
            <LinkContainer to='/'>
              <Navbar.Brand> Market Snipers Academy </Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Market Snipers Academy
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav variant='pills' className="justify-content-start flex-grow-1 pe-3 rounded">
                  {/* <LinkContainer to='/courses'> <Nav.Link>Courses</Nav.Link> </LinkContainer>  */}
                  {/* <LinkContainer to='/Blog'> <Nav.Link>Blog</Nav.Link> </LinkContainer> */}
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Signup
            </Nav.Link>
          </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header