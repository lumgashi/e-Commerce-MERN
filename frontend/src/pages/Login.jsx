import React, { useState } from 'react'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../services/appApi'
import '../styles/login.css'


const Login = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login, { isLoading, isError, error }] = useLoginMutation();
   const navigate = useNavigate();


   const handleSubmit = (e) => {
      e.preventDefault();
      login({ email, password })
      navigate('/')
   }

   return (
      <Container>
         <Row>
            <Col sm={12} md={5} className='login__form--container'>
               <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
                  <h1>Welcome Back</h1>
                  <p>Welcome back! Please enter your details</p>
                  <Form.Group className='login__form--formGroup'>
                     <Form.Control type="email" placeholder="Enter email" value=
                        {email} required onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group className='login__form--formGroup'>
                     <Form.Control type="password" placeholder="Enter Password"
                        value={password} required onChange={(e) =>
                           setPassword(e.target.value)} />
                  </Form.Group>

                  {isError && <p style={{ textAlign: 'center', color: 'tomato' }}>{error.data}</p>}

                  <Form.Group className="login__form--formCheck">
                     <Form.Check type="checkbox" label="Remember me for 30 days" />
                     <p>
                        <Link to='/forgot-password'>Forgot Password</Link>
                     </p>
                  </Form.Group>

                  <Form.Group>
                     <Button className='login__form--button'
                        type='submit'
                        value=""
                        disabled={isLoading}
                        style={{ backgroundColor: '#111727' }}
                     >
                        Log in
                     </Button>
                     <p>Dont have an account?{" "}
                        <Link to='/signup'>
                           Sign up for free
                        </Link>
                     </p>
                  </Form.Group>
               </Form>
            </Col>

            <Col md={7}></Col>
         </Row>
      </Container>
   )
}

export default Login