import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'



function PlaceOrderPage({history}) { 
  const orderCreate = useSelector(state => state.orderCreate)
  const {order, error, success} = orderCreate

  const dispatch = useDispatch
  const cart = useSelector(state => state.cart)
  
  cart.itemsPrice = cart.price
  cart.totalPrice = (Number(cart.price)).toFixed(2) 


  if(!cart.paymentMethod){
	history.push('/payment')
  }

  useEffect(() => {
	if(success) {
	  history.push(`/order/${order._id}`)
	  dispatch({ type: ORDER_CREATE_RESET })
	}
  }, [success, history, dispatch, order])

  const placeOrder = () => {
		dispatch(createOrder({
			orderItems: cart.cartItems,
			paymentMethod:cart.paymentMethod,
			itemsPrice: cart.itemsPrice, 
			totalPrice: cart.totalPrice,
		}))

  }


  return (
	<Container>
	  <CheckoutSteps step1 step2 step3 />
	  <Row>
		<Col md={8}>
		  <ListGroup variant='flush'>
			<ListGroup.Item>
				<h2>Payment Method</h2>
				<p>
				  <strong>Method: </strong>
				  {cart.paymentMethod}
				</p>
			  </ListGroup.Item>
				
			  <ListGroup.Item>
				  <h2>Order Items</h2>
					{cart.cartItems.length === 0 ? <Message variant='info'>
					  Your cart is empty
					</Message> : (
						<ListGroup variant='flush'>
						  {cart.cartItems.map((item, index) => (
								<ListGroup.Item key={index}>
									  <Row>
										<Col md={1}>
										  <Image src={item.image} alt={item.name} fluid rounded />
										</Col>

										<Col>
										  <Link to={`/courses/${item.course}`}>{item.name}</Link>
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
		  <ListGroup variant='flush'>
			<ListGroup.Item>
			  <h2>Purchase Summary</h2>
			</ListGroup.Item>

			<ListGroup.Item>
								<Row>
									<Col>Items:</Col>
									<Col>${cart.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>


							<ListGroup.Item>
								<Row>
									<Col>Total:</Col>
									<Col>${cart.totalPrice}</Col>
								</Row>
							</ListGroup.Item>


							<ListGroup.Item>
								{error && <Message variant='danger'>{error}</Message>}
							</ListGroup.Item>

							<ListGroup.Item>
								<Button
									type='button'
									className='btn-block'
									disabled={cart.cartItems === 0}
									onClick={placeOrder}
								>
									Place Order
								</Button>
							</ListGroup.Item>
		  </ListGroup>
		</Col>
	  </Row>

	</Container>
  )
}

export default PlaceOrderPage