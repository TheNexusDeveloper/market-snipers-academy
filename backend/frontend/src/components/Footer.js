import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import MSALOGO1 from '../designassetsmsa/MSALOGO1.png'

function Footer() {
  return (
    <footer className='' style={{backgroundColor:'#000000',}}>
      <Container fluid>
        <Row> 
          <Col className=''> 
            <img src={MSALOGO1} alt='MSALOGO' width='220px' height='220px'/>
          </Col> 

          <Row className='text-center'>
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


          <Col className='text-center py-3'>Copyright &copy; Master Snipers Academy </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer