import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

import { listCourseDetails, updateCourse } from '../actions/courseActions'
import { COURSE_UPDATE_RESET } from '../constants/courseConstants'



function CourseEditPage({ match, history }) {

    const courseId = match.params.id

    const [name, setName] =  useState('')
    const [price, setPrice] =  useState(0)
    const [image, setImage] =  useState('')
    const [document, setDocument] = useState('')
    const [about, setAbout] =  useState('')
    const [description, setDescription] =  useState('')
    const [tutors, setTutor] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch() 

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin 

    const courseDetails = useSelector(state => state.courseDetails)
    const {error, loading, course} = courseDetails


    const courseUpdate = useSelector(state => state.courseUpdate)
    const {error:errorUpdate, loading:loadingUpdate, success:successUpdate,} = courseUpdate

    useEffect(() => {

        if (successUpdate){
            dispatch({type:COURSE_UPDATE_RESET})
            history.push('/admin/courselist')
        } else {
            if (!course.name || course._id !== Number(courseId)) {
                dispatch(listCourseDetails(courseId))
            } else {
                setName(course.name)
                setPrice(course.price)
                setImage(course.image)
                setDocument(course.document)
                setAbout(course.about)
                setDescription(course.description)
                
            }

        }

           

       
    },  [ dispatch, course, courseId, history, successUpdate])

    const submitHandler = (e) =>{
        e.preventDefault()
        // update course 
        dispatch(updateCourse({
            _id: courseId,
            name, 
            price,
            image,
            document,
            about,
            description,
            tutors,

        }))
        
    }

    const uploadImageHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData() 

        formData.append('image', file)
        formData.append('course_id', courseId)

        setUploading(true) 

        try{
            const config = {
                headers:{
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`
                }
            } 


            const {data} = await axios.post('/api/courses/upload/', formData, config )

            setImage(data)
            setUploading(false)

        }catch(error){
            setUploading(false)
        }
    }

    const uploadDocHandler = async (e) => {
        const file = e.target.files[0] 
        const formData = new FormData()

        formData.append('document', file )
        formData.append('course_id', courseId )

        setUploading(true)

        try{
            const config = {
                headers:{
                    'Content-Type': 'multipart/for-data',
                    Authorization: `Bearer ${userInfo.token}`,
                }
            }

            const {data} = await axios.post('api/courses/uploadDocument/', formData, config)
            
            setDocument(data)
            setUploading(false)
        } catch(error){
            setUploading(false)
        }
    }
    
  return ( 
    <Container>

        <Link to='/admin/courselist'>
            Go Back
        </Link>
        <FormContainer>
            <h1>Edit Course </h1> 
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
            : (
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            
                            type='number'
                            placeholder='Enter price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            
                            type='text'
                            placeholder='Enter Image'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        >
                        </Form.Control>

                        <Form.Control
                            type='file'
                            id='image'
                            label= 'choose flle'
                            custom 
                            onChange={uploadImageHandler}
                        >
                            
                        </Form.Control>
                        {uploading && <Loader/>}
                        
                    </Form.Group>


                    <Form.Group controlId='document'>
                        <Form.Label>Document</Form.Label>
                        <Form.Control
                            
                            type='text'
                            placeholder='Upload Document'
                            value={document}
                            onChange={(e) => setDocument(e.target.value)}
                        >
                        </Form.Control>

                        <Form.Control
                            type='file'
                            id='document'
                            label= 'choose document'
                            custom
                            onChange={uploadDocHandler}
                        >
                            
                        </Form.Control>
                        {uploading && <Loader/>}
                        
                    </Form.Group>



                    <Form.Group controlId='about'>
                        <Form.Label>About</Form.Label>
                        <Form.Control
                            
                            type='text'
                            placeholder='Enter about'
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            
                            type='text'
                            placeholder='Enter description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='tutors'>
                        <Form.Label>Tutor</Form.Label>
                        <Form.Control
                            
                            type='text'
                            placeholder='Enter Tutors'
                            value={tutors}
                            onChange={(e) => setTutor(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

            

                <Row className='py-3'>
                    <Col>
                        <Button type='submit' variant='warning'>
                            Update
                        </Button>
                    </Col>
                </Row>

            

                </Form>
            )}

            

        </FormContainer>

    </Container>
    
  )
}

export default CourseEditPage