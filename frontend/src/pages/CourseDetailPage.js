import React from 'react'
import coursedb from '../coursedb'
import { useParams } from 'react-router' 
import {Container, Row, Col, Button, Card  } from 'react-bootstrap'
import face2 from '../media/face2.jpg'




function CourseDetailPage() {
    const {id} = useParams();
    const course = coursedb.find((c) => c._id === (id) )

    
  return (
    <div> 
      <Row style={{backgroundColor:'#212519', textDecorationColor:'white'}} className='py-3 text-center'>
          <Col className='py-5'>
            <h1>{course.name}</h1>
            <p>{course.about}</p>
            <p>{course.about}</p>
            <Row>
              <Col>
              <div className='text-center'><img src={ face2 } alt='face' className='border rounded-circle' width='50'/></div>
              </Col>
            </Row>
            
          </Col>

          <Col className='text-center'>
              <img src={course.image} alt='course'  height='200'/>
          </Col>
        </Row>
      

      <Container>
        <Row className='my-5 text-center'>
          <Col>
           <div><h3>What You'll Learn</h3></div>
           <div className='my-3'>
            <p>{course.about}</p>
            <p>{course.about}</p>
            <p>{course.about}</p>
            <p>{course.about}</p>
           </div>
            
          </Col>
         
          <Col className='text-center'>
            <Card border='warning' style={{width:'18rem'}} className='text-center'>
              <Card.Header>Pricing</Card.Header>
              <Card.Body>
                <Card.Title>${course.price}</Card.Title>
                <Card.Text>
                  <p>comes with a 20% discount when you purchase be december 12th</p>
                </Card.Text>
                <Button variant="outline-warning">Get the course</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='text-center'>
          <h3>Description</h3>

          <p> {course.Description}</p>
          <p> {course.Description}</p>
          <p> {course.Description}</p>
          
        </Row>
        
      </Container>
        
    </div>
  )
}

export default CourseDetailPage