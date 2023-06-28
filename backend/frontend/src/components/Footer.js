import React from 'react'

import { Container, Row, Col, Nav, Button } from 'react-bootstrap'
import MSALOGO1 from '../designassetsmsa/MSALOGO1.png'

function Footer() {
  return (
    <footer className='' style={{backgroundColor:'#000000', color: 'white'}}>
      <Container fluid>
        <Row> 
            <Container>
                <Col className='text-left'> 
                    <img src={MSALOGO1} alt='MSALOGO' width='220px' height='220px'/>
                </Col>

                <hr/>
            </Container>

            <Container>
                <Row>
                <Col className='text-center' sm={12} md={12} lg={6} xl={6}>
                    <Nav className="justify-content-center p-3" activeKey="/home" variant='underline'>
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/mentorship">Mentorship</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://market-snipers.com/">Trade</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/blog" disabled>Blog</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col> 

                <Col className='text-center p-3' sm={12} md={12} lg={6} xl={6}>
                    <Button variant='outline-warning' className='p-3 rounded-5'>Subscribe to our Monthly Newsletter to stay up to date</Button>            
                </Col>
                </Row>

                <hr/>
            </Container>
         
          
          <Row className=' p-3'>
            <Col sm={12} md={12} lg={6} xl={6}>
                <Col >
                    <p> <i className='fa fa-map-marker' aria-hidden="true" style={{fontSize:'1.8em', color:'#cc9900', paddingRight:'10px'}}></i>  
                    1. Wayne Manor Lane, Winsconsin, Netherlands
                    </p>
                </Col>

                <Col>
                    <p> <i className='fas fa-envelope' aria-hidden="true" style={{fontSize:'1.8em', color:'#cc9900', paddingRight:'10px'}}></i>
                        <a href="mailto:support@market-snipers.com" style={{color: 'white', textDecoration: 'none'}}>support@market-snipers.com</a>
                    </p>
                </Col>

                <Col>
                    <p> <i className='fas fa-phone' aria-hidden="true" style={{fontSize:'1.8em', color:'#cc9900', paddingRight:'10px'}}></i>
                        <a href="tel:+1234567890" style={{color: 'white', textDecoration: 'none'}}>+1 234567890</a>
                    </p>
                </Col>
            </Col>

           
          </Row>

          <Row className='text-center py-3'>
          <Col> 
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'> <i className="bi bi-facebook"  style={{fontSize:'1.8em', color:'#cc9900'}}></i></a>
          </Col>

          <Col> 
            <a href='https://www.twitter.com' target='_blank' rel='noreferrer'> <i className="bi bi-twitter"  style={{fontSize:'1.8em', color:'#cc9900'}}></i></a>
          </Col>

          <Col> 
            <a href='https://www.discord.com' target='_blank' rel='noreferrer'> <i className="bi bi-discord"  style={{fontSize:'1.8em', color:'#cc9900'}}></i></a>
          </Col>

          <Col> 
            <a href='https://www.youtube.com' target='_blank' rel='noreferrer'> <i className="bi bi-youtube"  style={{fontSize:'1.8em', color:'#cc9900'}}></i></a>
          </Col>

          <Col> 
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'> <i className="bi bi-instagram"  style={{fontSize:'1.8em', color:'#cc9900'}}></i></a>
          </Col>

        </Row>


          <Col className='text-center p-5'>&copy; 2023 Master Snipers Academy. All Rights Reserved. </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer