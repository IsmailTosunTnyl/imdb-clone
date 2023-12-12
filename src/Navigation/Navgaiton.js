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
import ListGroup from 'react-bootstrap/ListGroup';
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdStars } from "react-icons/md";
import { CloseButton } from 'react-bootstrap';
function Navigation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   // const handleSignInClick = () => {
   //   // Burada Sign In sayfasına yönlendirme işlemini gerçekleştirin
   //   window.location.href = '/signin';
   // };
  //
   // const handleSignUpClick = () => {
   //   // Burada Sign Up sayfasına yönlendirme işlemini gerçekleştirin
   //   window.location.href = '/signup';
   // };    Böyle yapsam ne farkedio href ile yaparwsam ne farkedio

  return (
    <Navbar expand="lg"  className="bg-body-tertiary" data-bs-theme="dark"  >
    <Container fluid >
    <Navbar.Brand href="/home" style={{color:"gold"}}>IMDB V2.0</Navbar.Brand>
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
      
 
      <Offcanvas show={show} onHide={handleClose}  placement='top' style={{backgroundColor:"black",height:"100vh",color:"white"}}  >
      <Container style={{backgroundColor:"black" ,margin:"0 auto",width:"80vw",color:"white"}}>
      <Row>
        <Col sm={8}><Offcanvas.Title>IMDB V2.0</Offcanvas.Title> </Col>
        <Col style={{display:"flex",justifyContent:"end"}} sm={4}><Offcanvas.Header closeButton> <CloseButton variant='white'/> </Offcanvas.Header></Col>
      </Row>
        
          
        
        <Offcanvas.Body >
        <Row style={{textAlign:"center"}}>
        <Col  sm>
          <ListGroup>
            <div className='menuListTitle'>
            <MdLocalMovies className='menuListTitleIcon'/>
            <h2>asfasdas</h2>
          </div>
          <ListGroup.Item className='menuList'>Cras justo odio</ListGroup.Item>
          <ListGroup.Item className='menuList'>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item className='menuList'>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item className='menuList'>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm>
        <ListGroup >
          <div className='menuListTitle'>
            <PiTelevisionSimple className='menuListTitleIcon'/>
            <h2>asfasdas</h2>
          </div>
          <ListGroup.Item className='menuList'>Cras justo odio</ListGroup.Item>
          <ListGroup.Item className='menuList'>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item className='menuList'>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item className='menuList'>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm>
        <ListGroup >
          <div className='menuListTitle'>
            <MdStars className='menuListTitleIcon'/>
            <h2>asfasdas</h2>
          </div>
          <ListGroup.Item className='menuList'>Cras justo odio</ListGroup.Item>
          <ListGroup.Item className='menuList'>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item className='menuList'>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item className='menuList'>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      
      
    
      
      
        </Offcanvas.Body>

      </Container>
    </Offcanvas>


      <Navbar.Toggle aria-controls="navbarScroll" />
      
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-1"
          style={{ maxHeight: '100px',display:"flex",justifyContent:"end",width:"100%" }}
          navbarScroll>
            <Nav.Link href="/signin" style={{color:"white"}}>Sign In</Nav.Link>
            <Nav.Link  href="/signup"  style={{color:"white"}}>Sign Up</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation