import React from 'react'

import { Button, Row, Col, Container } from 'react-bootstrap'

import ment22 from '../media/ment22.jpg'
import bitcoin from '../media/bitcoin.png'
import amazon from '../media/amazon.png'
import ecommerce from '../media/ecommerce.png'

function MentorshipPage() {
  return (
    <Container>
    <Row className='my-3 text-center'>
        <Col sm={12} lg={6} className='p-3' >
            <div>
                <img src={ment22} alt='mentor' width='100%' className='rounded-3'/>
            </div>
        </Col>


        <Col sm={12} lg={6} className='my-5'>
            <div >
                <h2>Get Mentorship Classes from industry leaders</h2>
                <div className='text-center'>
                <p>Don't be left in the dark while learning on your own.
                Learn faster at your own pace with well organised classes and tutorials.
                Get in depth knowledge of technologies you thought you knew
                Master various trading skills over a wide range of technologies.
                </p>
                <Button variant='outline-warning' className='rounded-5'>View Classes</Button>
                </div>
            
            </div>
        </Col>
    </Row>

    <Row className='my-5'>
        <Col className='text-center'>
        <h3>Wide Range of classes available </h3>
        </Col>

        <Row>
        <Col className='text-center'>
            <div>
                <img src={bitcoin} alt='classes' width='100px' className='border rounded-circle'/>
            </div>
        </Col>

        <Col className='text-center'>
            <div>
                <img src={bitcoin} alt='classes' width='100px' className='border rounded-circle'/>
            </div>
        </Col>
        <Col className='text-center'>
            <div>
                <img src={amazon} alt='classes' width='100px' className='border rounded-circle'/>
            </div>
        </Col>
        <Col className='text-center'>
            <div>
                <img src={ecommerce} alt='classes' width='100px' className='border rounded-circle'/>
            </div>
        </Col>
        <Col className='text-center'>
            <div>
                <img src={bitcoin} alt='classes' width='100px' className='border rounded-circle'/>
            </div>
        </Col>
        </Row>
        
        
    </Row>

    <Row className='my-5'>
        <Col className='text-center' >
            <h3>Tutors</h3>
        </Col>

        <Col>
            
        </Col>
    </Row>
    </Container>
    
  )
}

export default MentorshipPage