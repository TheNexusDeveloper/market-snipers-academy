import React from 'react' 
import { Card, Button,  Stack, Row, Col, Container } from 'react-bootstrap' 
// import { useDispatch, useSelector } from 'react-redux'
import news from '../media/news.jpg'
import trustwallet1 from '../media/trustwallet1.png'
import study from '../media/study.jpg'
import acct from '../media/acct.jpg'
import pointer from '../media/pointer.jpg'
// import CourseCard from '../components/CourseCard'
import CarouselComponent from '../components/CarouselComponent'
import AboutComponent from '../components/AboutComponent'
// import { listCourses } from '../actions/courseActions'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import axios from 'axios'

function HomePage() {
//   const dispatch = useDispatch()
//   const courseList = useSelector(state => state.courseList)
//   const {error, loading, courses} = courseList

//   useEffect(() => {
//     dispatch(listCourses())
  
//   }, [dispatch]) 



  return (
    <Stack>

                     {/*Carousel section*/}

      <div>
        <CarouselComponent/>
      </div>

                    {/*About Us section*/}

      <AboutComponent/>

                    {/* Courses Section */} 
        <Container>
            <Row className='my-3 text-center'>
                <Col sm={12} lg={6} className='p-3' >
                    <div>
                        <img src={study} alt='someone learning' width='100%' className='rounded-3'/>
                    </div>
                </Col>


            <Col sm={12} lg={6} className='my-5'>
                <div >
                    <h2>We offer well tailored courses aimed at a 100% self improvement </h2>
                    <div className='text-center'>
                    <p>Master the arts of any area of your choice with our compilation of 
                        well tailored courses designed to take you from a beginner in the industry to a professional.
                    </p>
                    <Link to='/courses'><Button variant='outline-warning' className='rounded-5'>View Courses</Button></Link>
                    </div>
                
                </div>
            </Col>
            </Row>

            <Row className='my-3 text-center'>
            <Col sm={12} lg={6} className='my-5'>
                <div >
                    <h2>Let us help you grow your Account</h2>
                    <div className='text-center'>
                    <p>You Don't have to start alone.
                        Let's us help you trade and reduce the common mistakes made by first times.
                        Trading is a very risky business but the risks can be reduced with the right strategy.
                    </p>
                    <a href='https://market-snipers.com/' target='_blank' rel="noreferrer" style={{textDecoration: 'inherit'}}><Button variant='outline-warning' className='rounded-5'>Find Out More</Button></a>
                    </div>
                
                </div>
            </Col>

            <Col sm={12} lg={6} className='p-3' >
                    <div>
                        <img src={acct} alt='phone and laptop showing trade activities' width='100%' className='rounded-3'/>
                    </div>
                </Col>
            </Row>



            <Row className='my-3 text-center'>
                <Col sm={12} lg={6} className='p-3' >
                    <div>
                        <img src={pointer} alt='barchart on a white paper' width='100%' className='rounded-3'/>
                    </div>
                </Col>


            <Col sm={12} lg={6} className='my-5'>
                <div >
                    <h2>Sign Up for our Mentorship Classes with top industry leaders</h2>
                    <div className='text-center'>
                    <p>Don't be left in the dark while learning on your own.
                    Learn faster at your own pace with well organised classes and tutorials.
                    Get in depth knowledge of technologies you thought you knew
                    Master various trading skills over a wide range of technologies.
                    </p>
                    <Link to='/mentorship'><Button variant='outline-warning' className='rounded-5'>View Courses</Button></Link>
                    </div>
                
                </div>
            </Col>
            </Row>
        </Container>


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