import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import {logout} from '../actions/userActions'

import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import MSALOGO11 from '../designassetsmsa/MSALOGO11.png'


const options = {
  backgroundColor: "rgba(0, 0, 0, 0.9)",

  
}

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin 

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return ( 
    <header> 
         <Navbar collapseOnSelect expand="lg" bg='black' variant="dark" className="py-4 border border-0 header" sticky='top' style={options}>
      <Container>
       <Navbar.Brand> 
          <Link to='/'> 
            <img src={MSALOGO11} alt='MSALOGO' width='170px' height='70px'/>
          </Link> 
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" variant=''>
            <LinkContainer to='/courses'>
              <Nav.Link>Courses</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to='/classes'>
              <Nav.Link>Classes</Nav.Link>
            </LinkContainer> */}

            <LinkContainer to='/mentorship'>
              <Nav.Link>Mentorship</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/acct-management'>
              <Nav.Link>Account Management</Nav.Link>
            </LinkContainer>


            <LinkContainer to='/blog'>
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/cart'>
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>

          {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
                <Nav>
                  <LinkContainer to='/register'>
                    <Nav.Link eventKey={2}>Sign Up</Nav.Link>
                  </LinkContainer>
          
                  <LinkContainer to='/login'>
                    <Nav.Link eventKey={2}>Log In</Nav.Link>
                  </LinkContainer>
            
                </Nav>
          )}
            <Nav>
                {userInfo && userInfo.isAdmin && (
                    <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userList'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/courseList'>
                    <NavDropdown.Item>Courses</NavDropdown.Item>
                    </LinkContainer>
    
                    
                </NavDropdown>
                )}
            </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header