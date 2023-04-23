import React, {useState, useEffect } from 'react' 
import { Card, Button,  Stack, Row, Col, Container } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux'
import news from '../media/news.jpg'
import trustwallet1 from '../media/trustwallet1.png'
import CourseCard from '../components/CourseCard'
import CarouselComponent from '../components/CarouselComponent'
import AboutComponent from '../components/AboutComponent'
import { listCourses } from '../actions/courseActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
// import axios from 'axios'

function HomePage() {
  const dispatch = useDispatch()
  const courseList = useSelector(state => state.courseList)
  const {error, loading, courses} = courseList

  useEffect(() => {
    dispatch(listCourses())
  
  }, [dispatch]) 



  return (
    <Stack>

                     {/*Carousel section*/}

      <div>
        <CarouselComponent/>
      </div>

                    {/*About Us section*/}

      <AboutComponent/>

                    {/* Courses Section */}

        {/* <Container> 
        	{loading ? <Loader />
        		: error ? <Message variant='danger'>{error}</Message>
            		:
					<Row className='my-3'>
						<Col><h2 className='text-center'>Courses</h2></Col>
						<Container>
							<Row>
								{courses.map(course => (
									<Col key={course._id} sm={12} md={6} lg={4} >
										<CourseCard course={course} />
									</Col>
								))}
							</Row>
						</Container>
					</Row>
        	}
        </Container> */}

                        {/** Blog Section */}

        <Container> 
          <h2 className='text-center'>Blog</h2>
          <Row className='my-5'>
          <Col>
          <Card>
            <Card.Img variant="top" src={news} alt='pic'/>
            <Card.Body>
              <Card.Title>Elon Musk plans to start selling plots of Land on the moon</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Text>
              <Button variant='outline-warning'>Read More</Button>
            </Card.Body>
          </Card>
        </Col>
          </Row>

        <Row className='my-5' xs={1} md={2} lg={3}>
        <Col>
          <Card>
            <Card.Img variant="top" src={news} alt='pic'/>
            <Card.Body>
              <Card.Title>Elon Musk plans to start selling plots of Land on the moon</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Text>
              <Button variant='outline-warning'>Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={news} alt='pic'/>
            <Card.Body>
              <Card.Title>Elon Musk plans to start selling plots of Land on the moon</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Text>
              <Button variant='outline-warning'>Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={news} alt='pic'/>
            <Card.Body>
              <Card.Title>Elon Musk plans to start selling plots of Land on the moon</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Text>
              <Button variant='outline-warning'>Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        </Row>

        </Container>

                         {/** Students Testimonial section  */}

        <Container> 
          <h2 className='text-center'>What our students are saying</h2>
          <Row className='my-5' xs={1} md={2} lg={3} >
            <Col>
              <figure>
                <blockquote class="blockquote">
                  <p>"A well-known quote, contained in a blockquote element."</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </Col>

            <Col>
              <figure>
                <blockquote class="blockquote">
                  <p>"A well-known quote, contained in a blockquote element."</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </Col>

            <Col>
              <figure>
                <blockquote class="blockquote">
                  <p>"A well-known quote, contained in a blockquote element."</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </Col>

          </Row>
        </Container>

        <Container fluid> 
          <h2 className='text-center'>Our Patners</h2>
          <Row>
            <Col sm='4' lg='4'>
              <img src={trustwallet1} alt='trustwallet' width='100%'/>
            </Col>

            <Col sm='4' lg='4'>
              <img src={trustwallet1} alt='trustwallet' width='100%'/>
            </Col>

            <Col sm='4' lg='4'>
              <img src={trustwallet1} alt='trustwallet' width='100%'/>
            </Col>
          </Row>
        </Container>
    </Stack>
    
  )
}

export default HomePage