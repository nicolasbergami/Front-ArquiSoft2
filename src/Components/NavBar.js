import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import '../Components/components.css';

export function NavBar() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >
          <Link to="/">
            <img src="https://cdn.pixabay.com/photo/2012/04/24/18/13/bicycle-40756_960_720.png" className="logo" />

          </Link>
          BiciMundo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
          <Nav className="justify-content-center">
              <Link className="navbar" to='/' >Home </Link>
              <Link className="navbar" to='/Contacto' >Contacto </Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )


}

