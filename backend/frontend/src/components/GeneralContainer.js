import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function GeneralContainer({children}) {
  return (
    <Container>
        <Row className='py-3'>
            <Col>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default GeneralContainer