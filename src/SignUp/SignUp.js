import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LiaImdb } from "react-icons/lia";

function SignUp() {
  return (
    < div style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"white"}}>
        <a href='/home'><LiaImdb style={{fontSize:"10rem",color:"black"}}/></a>
       <Form style={{backgroundColor:"white",padding:"3rem 3rem",border:"1px grey solid",borderRadius:"5%",marginTop:"2rem"}}>
            <h2 className="mb-4">Create a Account</h2>

            <Form.Group style={{width:"30vw"}} className="mb-4" controlId="formGroupEmail">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="name" placeholder="First and Last name" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGroupPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>  

            <Form.Group className="mb-4" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="at least 8 characters" />
            </Form.Group>  

            <Form.Group className="mb-4" controlId="formGroupPassword">
              <Form.Label>Re-enter password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>  

            <Button  style={{width:"100%"}}  variant="secondary" size="lg">
                <label>Create Account</label>
            </Button>
            <label style={{marginTop:"3rem"}}>Already have an account? <a style={{textDecoration:"none"}} href='#'>Sign in</a> </label>
    </Form>
    

    
    </div>
  )
}

export default SignUp
