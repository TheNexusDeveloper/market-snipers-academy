import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

import { register } from '../actions/userActions'


function RegisterPage() {

    const [name, setName] =  useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch() 

    const location = useLocation()
    const history = useHistory()

    const redirect = location.search ? location.search.split('=')[1] : '/' 

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister 

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    },  [history, userInfo, redirect])

    const submitHandler = (e) =>{
        e.preventDefault()

        if (password !== confirmPassword){
            setMessage('passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
        
    }

    const handleReload = () =>{
        window.location.reload()
    }
    
  return (
    <FormContainer>
         <h1>Register </h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error &&<Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Enter Your Fullname'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>


            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='passwordConfirm'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Enter Password again'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Row className='py-3'>
                <Col>
                    <Button type='submit' variant='warning'>
                        Register
                    </Button>
                </Col>
            </Row>

           

        </Form>

        <Row className='py-3'>
            <Col>
                Already Have an Account? <Link 
                        to={redirect ? `/login?redirect=${redirect}` : '/login'} 
                        >
                    Login
                </Link>
            </Col>
        </Row>

        <Row>
            <Col>
                <em>if you're not redirected after login click here 
                    <Button 
                        variant='warning'
                        className='btn-sm mx-1'
                        onClick={handleReload}
                    >
                        here
                    </Button>
                </em>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default RegisterPage