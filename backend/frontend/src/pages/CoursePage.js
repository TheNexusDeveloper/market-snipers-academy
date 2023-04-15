import React, {useState, useEffect } from 'react' 

import { Row, Col, Container } from 'react-bootstrap'
// import coursedb from '../coursedb'
import CourseCard from '../components/CourseCard'

import axios from 'axios'

function CoursePage() {
  const [course, setCourses] = useState([])

  useEffect(() => {

    async function fetchCourses(){

      const { data } = await axios.get(`/api/courses/`)
      setCourses(data)
    }

    fetchCourses()
    
  },[]) 
  return (
    <div> 
      
        <Container>
            <Row className='text-center py-3'>
                <h1> COURSES </h1>
                <em>Explore our vast range of high in demand courses available </em>
            </Row>
            <hr/>
        </Container>
        
        <Container fluid>
         <Row>
          {course.map(course => (
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