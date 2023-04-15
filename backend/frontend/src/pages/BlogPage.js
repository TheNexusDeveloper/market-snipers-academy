import React from 'react'
import blogdb from '../blogdb'
import BlogCard from '../components/BlogCard'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import news from '../media/news.jpg'

function BlogPage() {
  return (
    <div>
        <Container>
            <Row className='text-center py-3'>
                <h1>Welcome To The MSA Blog </h1>
                <em>Get information on the latest Tech and investment trends from the globe </em>
            </Row>
            <hr/>
        </Container>

      <Container fluid>
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

      <Row>
          {blogdb.map(blog => (
            <Col key={blog._id} sm={12} md={6} lg={4} xl={3} >
             <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
        
    </div>
  )
}

export default BlogPage