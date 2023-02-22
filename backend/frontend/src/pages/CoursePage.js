import React, {useState, useEffect } from 'react' 

import { Row, Col, Container, } from 'react-bootstrap'
// import coursedb from '../coursedb'
import CourseCard from '../components/CourseCard'
import studyyy from '../media/studyyy.jpg'

import axios from 'axios'

function CoursePage() {
  const [coursedb, setCourses] = useState([])

  useEffect(() => {

    async function fetchCourses(){

      const { data } = await axios.get(`/api/courses/`)
      setCourses(data)
    }

    fetchCourses()
    
  },[]) 
  return (
    <div> 
        <div width='100%'>
            <img src={studyyy} alt='study' width='100%'/>
        </div>
        <Container>
         <Row>
          {coursedb.map(course => (
            <Col key={course._id} sm={12} md={6} lg={4} xl={3} >
             <CourseCard course={course} />
            </Col>
          ))}
        </Row>
        </Container>
    </div>
  )
}

export default CoursePage