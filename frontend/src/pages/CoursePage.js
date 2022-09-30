import React, {useState, useEffect } from 'react' 

import { Row, Col, } from 'react-bootstrap'
// import coursedb from '../coursedb'
import CourseCard from '../components/CourseCard'
import studyy from '../media/studyy.jpg'

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