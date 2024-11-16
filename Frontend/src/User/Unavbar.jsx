// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Unavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <>
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"blue"}}>
      <Container>
        <Navbar.Brand ><Link to='/uhome' style={{color:'white',textDecoration:"none"}}>BookStore</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/uhome" style={{padding:"10px",color:"white",textDecoration:"none"}}>Home</Link>
            <Link to="/uproducts" style={{padding:"10px",color:"white",textDecoration:"none"}}>Books</Link>
            <Link to="/wishlist" style={{padding:"10px",color:"white",textDecoration:"none"}}>Wishlist</Link>
            <Link to="/myorders" style={{padding:"10px",color:"white",textDecoration:"none"}}>My orders</Link>
            <Link to="/" style={{paddingLeft:"10px",paddingTop:"10px",color:"white",textDecoration:"none"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"0px"}}>({JSON.parse(get).name} )</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* Welcome and Features Section */}
    <Container style={{ marginTop: '2rem' }}>
    <Alert variant="info">
      <h2 className="text-center">Welcome to the Book Store Application!</h2>
      <p className="text-center">
        Discover, explore, and enjoy an extensive collection of books from various genres.
      </p>
    </Alert>
    <Row className="mt-4">
      <Col md={4} className="mb-4">
        <div className="p-3 bg-light border rounded">
          <h4>Extensive Collection</h4>
          <p>
            Browse through a wide range of books, including bestsellers, classics, and new releases.
          </p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="p-3 bg-light border rounded">
          <h4>Personalized Wishlist</h4>
          <p>
            Create and manage your personal wishlist to keep track of books you want to read or buy.
          </p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="p-3 bg-light border rounded">
          <h4>Order Management</h4>
          <p>
            View your order history and track the status of your purchases with ease.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={4} className="mb-4">
        <div className="p-3 bg-light border rounded">
          <h4>Seamless Navigation</h4>
          <p>
            Navigate through the application effortlessly with our user-friendly interface.
          </p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="p-3 bg-light border rounded">
          <h4>Secure Account</h4>
          <p>
            Your account is secured, ensuring a safe and trustworthy browsing experience.
          </p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="p-3 bg-light border rounded">
          <h4>Detailed Book Information</h4>
          <p>
            Get detailed descriptions, authors, and prices to make an informed choice before buying.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</>
  );
};

export default Unavbar;
