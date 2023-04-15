import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CourseCard({course}) {
  return (
    <Card style={{ width: '18rem', height: '510px'}} className='my-3 p-3 rounded '>
      <Link to={`/course/${course._id}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
    <Card.Img variant="top" src={course.image} style={{height: '255px'}}/>
    <Card.Body>
      <Card.Title style={{height: '20%'}}><h4> {course.name} </h4></Card.Title>
      <Card.Text style={{height: '100px'}}>
      <p> {course.about}</p>
      </Card.Text>
      <Button variant="warning">View Course</Button>
    </Card.Body>
    {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Link>
  </Card>


  )
}

export default CourseCard