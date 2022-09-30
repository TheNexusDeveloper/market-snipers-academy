import React from 'react'
import blogdb from '../blogdb'
import BlogCard from '../components/BlogCard'
import { Row, Col, } from 'react-bootstrap'

function BlogPage() {
  return (
    <div>
        <div>
            
        </div>
        <Row>
          {blogdb.map(blog => (
            <Col key={blog._id} sm={12} md={6} lg={4} xl={3} >
             <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default BlogPage