import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Row, Col, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'


import { listCourses, deleteCourse, createCourse } from '../actions/courseActions'
import { COURSE_CREATE_RESET } from '../constants/courseConstants'

function CourseListPage({history, match}) {

    const dispatch = useDispatch()

    const courseList = useSelector(state => state.courseList)
    const {loading, error, courses } = courseList 

    const courseDelete = useSelector(state => state.courseDelete)
    const {loading: loadingDelete, error: errorDelete, success: successDelete } = courseDelete

    const courseCreate = useSelector(state => state.courseCreate)
    const {loading: loadingCreate, error: errorCreate, success: successCreate, course: createdCourse } = courseCreate

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo } = userLogin


    useEffect(() => {
        dispatch({type: COURSE_CREATE_RESET})

        if (!userInfo.isAdmin){
            history.push('/login')
        }
        
        if (successCreate) {
            history.push(`/admin/course/${createdCourse._id}/edit`)
        } else {
            dispatch(listCourses())
        }
    }, [ dispatch, history, userInfo, successDelete, successCreate, createdCourse])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this course?')){
            dispatch(deleteCourse(id))
        }
        
    }

    const createCourseHandler = () =>{
        // create course
        dispatch(createCourse())
    }

  return (
    <Container>
        <Row className='align-items-center'>
            <Col>
                <h1>Courses</h1>
            </Col>

            <Col className='text-right align-items-right'>
                <Button className='my-3 mx-5' onClick={createCourseHandler}>
                    <i className='fas fa-plus'></i> Add Course
                </Button>
            </Col>
        </Row>

        {loadingDelete && <Loader/>}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}


        {loadingCreate && <Loader/>}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

        {loading 
        ? (<Loader/>)
        : error 
            ?(<Message variant='danger'>{error}</Message>)
            : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th></th>
                        </tr>
                        
                        
                    </thead>

                    <tbody>
                        {courses.map(course => (
                            <tr key={course._id}>
                                <td>{course._id}</td>
                                <td>{course.name}</td>
                                <td>{course.price}</td>
                              
                                <td>
                                    <LinkContainer to={`/admin/course/${course._id}/edit/`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>

                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(course._id)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }
    </Container>
  )
}

export default CourseListPage