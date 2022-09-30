import React from 'react' 

import { Row, Col, } from 'react-bootstrap'
import coursedb from '../coursedb'
import CourseCard from '../components/CourseCard'
import studyy from '../media/studyy.jpg'

function CoursePage() {
  return (
    <div> 
        <div width='100%'>
            <img src={studyy} alt='study' width='100%'/>
        </div>
        
         <Row>
          {coursedb.map(course => (
            <Col key={course._id} sm={12} md={6} lg={4} xl={3} >
             <CourseCard course={course} />
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default CoursePage