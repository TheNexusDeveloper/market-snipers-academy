import React, { useEffect}from 'react'
import { useDispatch, useSelector  } from 'react-redux'
// import coursedb from '../coursedb'
// import { useParams } from 'react-router' 
import {Container, Row, Col, Button, Card, Image, ListGroup  } from 'react-bootstrap'
import face2 from '../media/face2.jpg'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCourseDetails } from '../actions/courseActions'




function CourseDetailPage({match, history}) {
  
  const dispatch = useDispatch()
  const courseDetails = useSelector(state => state.courseDetails)
  const {loading, error, course } = courseDetails
  
  // const { id } = useParams()



  useEffect(() => {
    dispatch(listCourseDetails(match.params.id))
   
  }, [dispatch, match]) 

  const saveToCartHandler = () => {
    history.push(`/cart/${match.params.id}`) 
  }
  

  const addToCartHandler = () => {
    history.push(`/login?redirect=payment`) 
  }
    
  return (
    <div> 
      {loading ? 
        <Loader/>
          : error 
            ? <Message variant='danger'>{error}</Message> 
          :(
            
            <Container>
              <Row>
                <Col className='py-3 text-center' md={6}>
                  <Image src={course.image} alt={course.name} fluid/>
                </Col>
                <Col md={6} className='py-3 text-center'>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h1>{course.name}</h1>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <p>{course.about}</p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                  <div className='text-center'> 
                    <img src={face2} alt='tutors' className='border rounded-circle' width='50' /> 
                  </div>
                  </ListGroup.Item>
                  <Col className='py-3 text-center'>
                  <Card border='warning' className='text-center'>
                    <Card.Header>Pricing</Card.Header>

                    <Card.Body>
                      <Card.Title>${course.price}</Card.Title>
                      <Card.Text>
                        <p>comes with a 20% discount for purchase before December 12th</p>
                      
                      </Card.Text>
                      <Col>
                        <Button 
                            onClick={saveToCartHandler} variant='outline-warning'>
                          Save this Course
                        </Button>
                      </Col>
                      
                      

                      <Button 
                          onClick={addToCartHandler} variant='warning'>
                        Get this Course
                      </Button>

                    </Card.Body>
                  </Card>
                </Col>
                  </ListGroup>
                </Col>


              </Row>

              <Row>
                <Col className='py-3 text-center' >
                  <h3>What you'll Learn</h3>  
                  <p>
                  {course.about}
                  <br/>
                  {course.about}  
                  </p>              
                </Col>

                
              </Row>
              
          
              <Row>
                <Col className='text-center py-3 mx-5'>
                  <h3>Description</h3>
                  <p>{course.description}</p>
                </Col>
              </Row>

              <Row>
                <Col md={12} className='text-center'>
                 <h1>About the Tutors </h1>
                 {/* <p>Taught by noteable professionals in the field</p> */}
                </Col>
              
                <Col className='text-center py-3' md={3}>
                
                <Card style={{backgroundColor: '#cc9900',}}>

                <div className='text-center my-3'><img src={ face2 } alt='face' className='border rounded-circle' width='120'/></div>
              <div>
                <p className='text-center'><em>Senior software Engineer</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
                </Card>
              
                </Col>

                <Col className='text-center py-3' md={3}>
                <Card style={{backgroundColor: '#cc9900',}}>

                <div className='text-center my-3'><img src={ face2 } alt='face' className='border rounded-circle' width='120'/></div>
              <div>
                <p className='text-center' style={{fontColor: 'white'}}><em>Senior software Engineer</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
                </Card>
              
                </Col>

                <Col className='text-center py-3'md={3}>
                <Card style={{backgroundColor: '#cc9900',}}>

                <div className='text-center my-3'><img src={ face2 } alt='face' className='border rounded-circle' width='120'/></div>
              <div>
                <p className='text-center'><em>Senior software Engineer</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
                </Card>
              
                </Col>
              </Row>
              


            </Container>

            )

    }


      
    </div>
  )
}

export default CourseDetailPage