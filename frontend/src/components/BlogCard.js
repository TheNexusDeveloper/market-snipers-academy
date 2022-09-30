import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import news from '../media/news.jpg'

function BlogCard({blog}) {
  return (
    <Card style={{ width: '18rem' }} className='my-3 p-3 rounded '>
    <Link to={`/blog/${blog._id}`}>
  <Card.Img variant="top" src={news} />
  <Card.Body>
    <Card.Title><h4> {blog.name} </h4></Card.Title>
    <Card.Text>
    <p> {blog.heading}</p>
    </Card.Text>
    <Button variant="warning">Read More</Button>
  </Card.Body>
  <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
      </Link>
</Card>

  )
}

export default BlogCard