import React, {useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

import { login } from '../actions/userActions'

function Loginpage({location, history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch() 

    
    const redirect = location.search ? location.search.split('=')[1] : '/' 

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin 



    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
        // if (userInfo){
            // setTimeout(function(){
            //     window.location.reload()
            // }, 2000)
        // }
        // setTimeout(function(){
        //     if (userInfo){
        //         window.location.reload();
        //     }
            
        //  }, 1000);
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if (userInfo) {
            
            history.push('/')
            window.location.reload()
        }
    },  [history, userInfo])

    

    const handleReload = () =>{
        window.location.reload()
    }

  return (
    <FormContainer>
        <h1>Sign In</h1>
        {error &&<Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}

        <Form onSubmit={submitHandler}>
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

            <Row className='py-3'>
                <Col>
                    <Button type='submit' variant='warning'>
                        Sign In
                    </Button>
                </Col>
            </Row>

           

        </Form>

        <Row className='py-3'>
            <Col>
                Don't Have an account? <Link 
                        to={redirect ? `/register?redirect=${redirect}` : '/register'} 
                        >
                    Register
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

export default Loginpage