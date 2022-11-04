import React, {useState, useEffect}from 'react'
import { useDispatch, useSelector  } from 'react-redux'
// import coursedb from '../coursedb'
import { useParams } from 'react-router' 
import {Container, Row, Col, Button, Card  } from 'react-bootstrap'
import face2 from '../media/face2.jpg'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCourseDetails } from '../actions/courseActions'



function CourseDetailPage() {
  const dispatch = useDispatch()
  const courseDetails = useSelector(state => state.courseDetails)
  const {loading, error, course } = courseDetails
  
  const { id } = useParams()

  useEffect(() => {
    dispatch(listCourseDetails(encodeURIComponent(id)))
   
  }, [dispatch, id])
    
  return (
    <div> 
      {loading ? 
        <Loader/>
          : error 
            ? <Message variant='danger'>{error}</Message> 
          :(
            <Container fluid>

            
            <Row style={{backgroundColor:'#cc9900', textDecorationColor:'white'}} className='py-3 text-center'>
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
           </div>
            
          </Col>
         
          <Col className='text-center'>
            <Card border='warning' style={{width:'18rem'}} className='text-center'>
              <Card.Header>Pricing</Card.Header>
              <Card.Body>
                <Card.Title>${course.price}</Card.Title>
                <Card.Text>
                  <p>comes with a 20% discount when you purchase before December 12th</p>
                </Card.Text>
                <Button variant="outline-warning">Get the course</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='text-center'>
          <h3>Description</h3>

          <p> {course.description}</p>
          
        </Row>
        
      </Container>
      </Container>
        

            )

    }


      
    </div>
  )
}

export default CourseDetailPage