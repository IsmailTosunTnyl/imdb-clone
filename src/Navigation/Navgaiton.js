import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import "./Nav.css"

function Navigation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg"  className="bg-body-tertiary" data-bs-theme="dark"  >
    <Container fluid >
    <Navbar.Brand href="#" style={{color:"gold"}}>IMDB V2.0</Navbar.Brand>
    <div className='navMenu' onClick={handleShow}>
    <GiHamburgerMenu  style={{fontSize:"2rem"}}></GiHamburgerMenu>
    <label style={{ fontSize: "18px", fontWeight: "bold"}}>Menu</label>
    </div>

    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
      
      <Form className="d-flex" style={{width:"50%"}}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      
 
      <Offcanvas show={show} onHide={handleClose} placement='top' style={{height:"100vh"}}  >
      <Container style={{backgroundColor:"bisque" ,margin:"0 auto",width:"80vw"}}>
      <Row>
        <Col sm={8}><Offcanvas.Title>IMDB V2.0</Offcanvas.Title> </Col>
        <Col style={{display:"flex",justifyContent:"end"}} sm={4}><Offcanvas.Header closeButton/></Col>
      </Row>
        
          
        
        <Offcanvas.Body >
        <Row style={{textAlign:"center"}}>
        <Col  sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
        </Offcanvas.Body>

      </Container>
    </Offcanvas>


      <Navbar.Toggle aria-controls="navbarScroll" />
      
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-1"
          style={{ maxHeight: '100px',display:"flex",justifyContent:"end",width:"100%" }}
          navbarScroll
  
        >
          <Nav.Link href="#action1" style={{color:"white"}}>Sign In</Nav.Link>
          <Nav.Link href="#" disabled style={{color:"white"}}>
            Sign Up
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation