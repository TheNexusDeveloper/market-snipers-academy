import React from 'react' 
import { Card, Button,  Stack, Row, Col, Container, Carousel } from 'react-bootstrap' 
import showcase from '../media/showcase.jpg'
import AwesomeGod from '../media/AwesomeGod.mp4'
import face2 from '../media/face2.jpg'
import bitcoin from '../media/bitcoin.png'
import news from '../media/news.jpg'
import msawp2 from '../media/msawp2.jpg'
import trustwallet from '../media/trustwallet.png'
// import interswitch_logo from '../media/interswitch_logo.svg'

function HomePage() {
  return (
    <Stack>
      <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={showcase}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={news}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={msawp2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

        <Container>
        <Row className='my-5'>
          <Col><h2 className='text-center'> What are we all about </h2></Col>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <Row xs={1} md={1} lg={2} xl={2}>
          <Col width='50%'>
            <video src={AwesomeGod} width="100%" height="240" controls typeof='video/mp4'/>
          </Col>
          <Col>
            <p>
              Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </Col>
          </Row>
          <Row className='my-3'>
            <Col>
              <div className='text-center my-3'><img src={ face2 } alt='face' className='border rounded-circle' width='200'/></div>
              <div>
                <p className='text-center'><em>Senior software Engineer</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </Col>

            <Col>
              <div className='text-center my-3'><img src={ face2 } alt='face' className='border rounded-circle ' width='200'/></div>
              <div>
                <p className='text-center'><em>Senior software Engineer</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </Col>

            <Col>
              <div className='text-center my-3'><img src={ face2 } alt='face' className='border rounded-circle' width='200'/></div>
              <div>
                <p className='text-center'><em>Senior software Engineer</em></p>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </Col>
          
          </Row>
        </Row>
        </Container>



        <Container> 
          <Row className='my-3'>
          <Col><h2 className='text-center'>Courses</h2></Col>
            <Row className='my-5' xs={1} md={2} lg={3}>
              <Col>
                <div className='my-3'><img src= {bitcoin} alt='bitcoin' className=' border rounded-circle' width={90} /></div>
                <div className='my-3'>
                <h4>Bitcoin Trading</h4>
                <p className=''>In here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <Button variant='warning'>Buy Course</Button>
                </div>
              </Col> 

              <Col>
                <div className='my-3'><img src= {bitcoin} alt='bitcoin' className=' border rounded-circle' width={90} /></div>
                <div className='my-3'>
                <h4>Bitcoin Trading</h4>
                <p className=''>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <Button variant='warning'>Buy Course</Button>
                </div>
              </Col> 

              <Col>
                <div className='my-3'><img src= {bitcoin} alt='bitcoin' className=' border rounded-circle' width={90} /></div>
                <div className='my-3'>
                <h4>Bitcoin Trading</h4>
                <p className=''>In here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <Button variant='warning'>Buy Course</Button>
                </div>
              </Col> 

            </Row>


          </Row>
        </Container>

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
            <Col width='50%'>
              <img src={trustwallet} alt='trustwallet' width='100%'/>
            </Col>

            <Col width='50%'>
              <img src={trustwallet} alt='trustwallet' width='100%'/>
            </Col>
          </Row>
        </Container>
    </Stack>
    
  )
}

export default HomePage