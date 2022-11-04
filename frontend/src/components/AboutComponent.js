import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AwesomeGod from '../media/AwesomeGod.mp4'
import face2 from '../media/face2.jpg'

function AboutComponent() {
  return (
    <div>
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

    </div>
  )
}

export default AboutComponent