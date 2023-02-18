import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CourseCard({course}) {
  return (
    <Card border='warning' style={{ width: '18rem' }} className='my-3 p-3 rounded '>
      <Link to={`/course/${course._id}`}>
    <Card.Img variant="top" src={course.image} height='200'/>
    <Card.Body>
      <Card.Title><h4> {course.name} </h4></Card.Title>
      <Card.Text>
      <p> {course.about}</p>
      </Card.Text>
      <Button variant="warning">View Course</Button>
    </Card.Body>
    <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Link>
  </Card>


  )
}

export default CourseCard