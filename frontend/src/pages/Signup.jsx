import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSignupMutation } from '../services/appApi'
import '../styles/login.css'



const Signup = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [signup, { error, isLoading, isError }] = useSignupMutation();
   const navigate = useNavigate();

   const handleSignup = (event) => {
      event.preventDefault();
      signup({
         name,
         email,
         password
      })
      navigate('/login');
   }

   return (
      <Container>
         <section className="signup__container">
            <Row>
               <Col sm={12} md={5} className='login__form--container'>
                  <Form style={{ width: '100%' }} onSubmit={handleSignup}>
                     <h1>Create an account.</h1>
                     <p>Create an account and start searching for your favorites things</p>

                     <Form.Group className='login__form--formGroup'>
                        <Form.Control type="text" placeholder="Enter Name" value=
                           {name} required onChange={(e) => setName(e.target.value)} />
                     </Form.Group>

                     <Form.Group className='login__form--formGroup'>
                        <Form.Control type="email" placeholder="Enter email" value=
                           {email} required onChange={(e) => setEmail(e.target.value)} />
                     </Form.Group>

                     <Form.Group className='login__form--formGroup'>
                        <Form.Control type="password" placeholder="Enter Password"
                           value={password} required onChange={(e) =>
                              setPassword(e.target.value)} />
                     </Form.Group>

                     {isError && <p style={{ textAlign: 'center', color: 'tomato' }}>
                        {error.data}</p>}

                     <Form.Group className="login__form--formCheck">
                        <Form.Check type="checkbox" label="I accept Terms & Conditions" />
                        {/* <p>
                           <Link to='/forgot-password'>Forgot Password</Link>
                        </p> */}
                     </Form.Group>

                     <Form.Group>
                        <Button className='login__form--button'
                           type='submit'
                           value=""
                           style={{ backgroundColor: '#111727' }}
                           disabled={isLoading}
                        >
                           Sign up
                        </Button>
                        <p>Already have an account?{" "}
                           <Link to='/login'>
                              Login
                           </Link>
                        </p>
                     </Form.Group>
                  </Form>
               </Col>

               <Col md={7}></Col>
            </Row>
         </section>
      </Container>
   )
}

export default Signup