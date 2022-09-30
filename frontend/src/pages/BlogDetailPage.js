import React from 'react'
import blogdb from '../blogdb'
import { useParams } from 'react-router' 
import { Row } from 'react-bootstrap';

function BlogDetailsPage() {

  const {id} = useParams();
    const blog = blogdb.find((b) => b._id === (id) )

  return (
    <div>
      <Row>
       <h1>{blog.heading}</h1>
       <p>{blog.story}</p>
      </Row>

      <Row>

      </Row>

      <Row>
        
      </Row>
    </div>
  )
}

export default BlogDetailsPage