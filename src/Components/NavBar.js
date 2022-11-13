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
            <img src="https://www.zarla.com/images/zarla-real-viva-1x1-2400x2400-20210603-hdvvry8jj63dddkjqbjf.png?crop=1:1,smart&width=250&dpr=2" className="logo" />

          </Link>
          InmoGroup
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
          <Nav className="justify-content-center">
              <Link className="navbar" to='/' >Home </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )


}

