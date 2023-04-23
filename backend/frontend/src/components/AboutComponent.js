import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AwesomeGod from '../media/AwesomeGod.mp4'
import face2 from '../media/face2.jpg'
import face3 from '../media/face3.jpg'
import face4 from '../media/face4.jpg'

function AboutComponent() {
  return (
    <div>
        <Container>
            <Row className='my-5 text-center'>
                <Col sm='12' md='12' lg='6' xl='6'>
                    <video src={AwesomeGod} width="100%"  className='rounded-3' controls typeof='video/mp4'/>
                </Col>

                <Col className='my-3'>
                    <h2>What are we all about</h2>
                    <div>
                        <p>
                            Don't be left in the dark while learning on your own.
                            Learn faster at your own pace with well organised classes and tutorials.
                            Get in depth knowledge of technologies you thought you knew
                            Master various trading skills over a wide range of technologies.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>


         <Container>
        <Row className='my-5'>

            <Col className='text-center' lg={12} >
                <h2>Meet Our Team</h2>
            </Col>
          
          
            <Col sm={12} md={6} lg={4}>
              <div className='text-center my-3'><img src={ face2 } alt='face' className='border rounded-circle' width='150'/></div>
              <div>
                <p className='text-center'><strong>John Doe Chukwudi</strong></p>
                <p className='text-center'><em>CEO, Head of Operations</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <div className='text-center my-3'><img src={ face3 } alt='face' className='border rounded-circle ' width='150'/></div>
              <div>
                <p className='text-center'><strong>Sara Daniels</strong></p>
                <p className='text-center'><em>Data Analyst</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <div className='text-center my-3'><img src={ face4 } alt='face' className='border rounded-circle' width='150'/></div>
              <div>
                <p className='text-center'><strong>Harry Flint</strong></p>
                <p className='text-center'><em>Senior software Engineer</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </Col>
          
        </Row>


        </Container>

    </div>
  )
}

export default AboutComponent