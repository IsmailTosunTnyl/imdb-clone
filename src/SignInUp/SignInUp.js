import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaImdb } from "react-icons/fa";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./SignInUp.css"

function SignInUp() {
  return (
    <>
   

    <Card style={{width:"100%",display:"flex",flexDirection:"row"}}>

      <Card.Body style={{width:"40%" ,display:"flex",alignItems:"center",justifyContent:"start",flexDirection:"column",gap:"1.5rem"}}>
            <h2>Sign-In</h2>
            <Button className='cardButton'   variant="secondary" size="lg">
                <FaImdb className='CardButtonIcons'/>
                <label>Sign in with IMDB</label>
            </Button>

            <Button className='cardButton'   variant="secondary" size="lg">
                <AiFillAmazonSquare className='CardButtonIcons' />
                <label>Sign in with Amazon</label>
            </Button>

            <Button className='cardButton'   variant="secondary" size="lg">
                <FcGoogle className='CardButtonIcons'/>
                <label>Sign in with Google</label>
            </Button>

            <Button  className='cardButton'  variant="secondary" size="lg">
                <FaApple className='CardButtonIcons'/>
                <label>Sign in with Apple</label>
            </Button>

            <Button  className='cardButton'  variant="secondary" size="lg">
                <FaFacebook className='CardButtonIcons'/>
                <label>Sign in with Facebook</label>
            </Button>

            <div style={{display:"flex",textAlign:"center"}}>
            <hr style={{border: '2px solid red',width:"6vw"}} />
            <span style={{margin:"0px 15px"}} >or</span>
            <hr style={{border: '2px solid red',width:"6vw"}} />

            </div>
            

            <Button   className='cardButton signUpButton'  variant="secondary" size="lg">
                <label>Create a New Account</label>
            </Button>
      </Card.Body>

      <div style={{width:"40px",height:"60vh",borderLeft:"1px black solid", margin:"2rem 0"}}></div>




      <Card.Body  style={{width:"60%",display:"flex",alignItems:"start",justifyContent:"start",flexDirection:"column",gap:"1.5rem"}}>
        <h2>Benefits of your free IMDb account</h2>
        <div>
            <h4>Personalized Recommendations</h4>
            <p>Discover shows you'll love.</p>
        </div>

        <div>
            <h4>Your Watchlist</h4>
            <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
        </div>

        <div>
            <h4>Your Ratings</h4>
            <p>Rate and remember everything you've seen.</p>
        </div>

        <div>
            <h4>Contribute to IMDb</h4>
            <p>Add data that will be seen by millions of people and get cool badges.</p>
        </div>

      </Card.Body>

      
    </Card>

    
    
    
  </>
  )
}

export default SignInUp

