import React, { useEffect, useState } from 'react'
import {Row, Col, ListGroup, Image, Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder, payOrderItem } from '../actions/orderActions'
import { ORDER_PAY_RESET, ORDERITEM_PAY_RESET } from '../constants/orderConstants'

function OrderPage({ match }) { 
    const orderId = match.params.id
    const dispatch = useDispatch()

    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const {order, error, loading} = orderDetails 

    const orderPay = useSelector(state => state.orderPay)
    const {loading:loadingPay, success:successPay} = orderPay

    const orderItemPay = useSelector(state => state.orderItemPay)
    const {loading:loadingItemPay, success:successItemPay} = orderItemPay
  
    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + Number(item.price), 0) 
    }
    
    const addPayPalScript = () =>{
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=ARplFVlOZZwd5ECynr-kM3d0t0sZ_fr9ZOvLV7yiDke7JTk5V6fkWzKG6EEdZuzSmKD0EtYAhBczPg3r'
        script.async = true 
        script.onload = () =>{
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }

    useEffect(() => {
        if(!order || order._id !== Number(orderId)) {
            dispatch({type: ORDER_PAY_RESET})
            dispatch({type: ORDERITEM_PAY_RESET})
            dispatch(getOrderDetails(orderId))
        } else if(!order.isPaid){
            if(!window.paypal){
                addPayPalScript()
            } else{
                setSdkReady(true)
            }
        }
        
      
    }, [dispatch, order, orderId, successPay, successItemPay])

    const successPaymentHandler = (paymentResult) =>{
        dispatch(payOrder(orderId, paymentResult))
        order.orderItems.forEach(function(item) {
            dispatch(payOrderItem(item._id, paymentResult))
          });
        
    }

    const handleReload = () =>{
        window.location.reload()
    }

  return loading ? (
    <Loader/>
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
            <div>
                <Container>
                    <Row className='py-3'>
                        <h1>Order: {order._id} </h1>
                        <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <p>
                        <strong>Method: </strong>
                        {order.paymentMethod}
                        </p>
                        {order.isPaid ? (
                            <Message variant='success'>Paid on: {order.paidAt}</Message> 
                        ) : (
                            

                            <div> 
                                <Message variant='warning'>Not Paid</Message>
                            <em>if paid status doesn't change after making payment click  
                                <Button 
                                    variant='warning'
                                    className='btn-sm mx-1'
                                    onClick={handleReload}
                                >
                                    here
                                </Button>
                            
                            </em>
                        </div>
                        )}
                    </ListGroup.Item> 

                        
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                            {order.orderItems.length === 0 ? <Message variant='info'>
                            Order is empty
                            </Message> : (
                                <ListGroup variant='flush'>
                                {order.orderItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>

                                                <Col>
                                                <Link to={`/course/${item.course}`}>{item.name}</Link>
                                                </Col>

                                                <Col md={4}>
                                                ${item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                                ))}

                                            </ListGroup>
                                        )}
                                </ListGroup.Item>

                </ListGroup>
                </Col>


                <Col md={4}>
                    <Card>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        
                    <h2>Order Summary</h2>
                    </ListGroup.Item>

                    <ListGroup.Item>
                                        <Row>
                                            <Col>Items:</Col>
                                            <Col>${order.itemsPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>


                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Total:</Col>
                                            <Col>${order.totalPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {!order.isPaid && (
                                        <ListGroup.Item>
                                            {loadingPay && loadingItemPay && <Loader/>}

                                            {!sdkReady ? (
                                                <Loader/>
                                            ): (
                                                <PayPalButton
                                                    amount={order.totalPrice}
                                                    onSuccess={successPaymentHandler}
                                                />
                                            )}
                                        </ListGroup.Item>
                                    )}

                                    
                </ListGroup>
                    </Card>
                
                </Col>
            </Row>

            </Container>
            </div>
  )
}

export default OrderPage