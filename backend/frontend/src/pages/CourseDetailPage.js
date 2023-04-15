import React, { useEffect}from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import {Container, Row, Col, Button, Card, Image, ListGroup  } from 'react-bootstrap'
import learning from '../media/learning.jpg'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCourseDetails } from '../actions/courseActions'
import { listMyOrders, listMyOrderItems } from '../actions/orderActions'


function CourseDetailPage({match, history}) {
  
    const dispatch = useDispatch()

    const courseDetails = useSelector(state => state.courseDetails)
    const {loading, error, course } = courseDetails

    const orderItemListMy = useSelector(state => state.orderItemListMy )
    const { orderItemList } = orderItemListMy
  

    useEffect(() => {
        dispatch(listCourseDetails(match.params.id))
        dispatch(listMyOrderItems())
        dispatch(listMyOrders())
    
    }, [dispatch, match]) 


    const saveToCartHandler = () => {
        history.push(`/cart/${match.params.id}`) 
    }


    function findpaidItems(orderItemList) {
        for (let find in orderItemList) {
            if (orderItemList[find].isPaid && orderItemList[find].name === course.name) {
                return orderItemList[find];
            }
        }
        return null;
    }
    
    const paidItems = findpaidItems(orderItemList)

    console.log(paidItems)


    return (
        <div> 
        {loading ? 
            <Loader/>
            : error 
                ? <Message variant='danger'>{error}</Message> 
            :(
                
                <Container>
                <Row>
                    <Col className='py-3 text-center' md={6}>
                    <Image src={course.image} alt={course.name} style={{width: '100%'}} fluid/>
                    </Col>

                    <Col md={6} className='py-3 text-center'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                        <h1>{course.name}</h1>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        <p>{course.about}</p>
                        </ListGroup.Item> 

                    <Col className='py-3 text-center'>
                    <Card className='text-center' >
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Pricing</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col><h5>${course.price}</h5></Col>
                                </Row>
                                
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>discount: </Col>
                                    <Col><h5>N/A</h5></Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                            <p>comes with a 20% discount for purchase before December 12th</p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <Button 
                                            onClick={saveToCartHandler} variant='warning'>
                                            Get this Course
                                        </Button>
                                        
                                    </Col>

                                {paidItems ? (
                                        <Col>
                                            <Button variant='outline-warning'>
                                               <a href={course.upload} style={{textDecoration: 'inherit', color: 'inherit'}}>Download Pdf</a>
                                            </Button>
                                        </Col>
                                ) : ( <div></div>)
                                }
                                </Row>
                            </ListGroup.Item>

                        </ListGroup>

                    </Card>
                    </Col>
                    </ListGroup>
                    </Col>


                </Row>

                <Row className='my-5'>
                    <Col className='py-3 my-3 text-center' >
                    <h3>What you'll Learn</h3>  
                        <li>
                            {course.about} <i className='fas fa-check' style={{color: 'blue'}}></i>
                        </li>
                        

                    <br/>

                    <li>
                            {course.about} <i className='fas fa-check' style={{ color: 'blueviolet'}}></i>
                    </li>            
                    
                    </Col>

                    <Col sm={3} md={3} lg={6}>
                        <img src={learning} alt='Learning' width='100%' className='rounded-4'/>
                    </Col>

                    
                </Row>
                
            
                <Row>
                    <Col className='text-center py-3 mx-5' style={{lineHeight: '50px', }}>
                    <h3>Description</h3>
                    <p>{course.description}</p>
                    </Col>
                </Row>

                
                </Container>

                )

        }


        
        </div>
    )
}

export default CourseDetailPage