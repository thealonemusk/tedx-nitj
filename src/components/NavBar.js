import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/tedxnitjLogoTwoLine.png';
import { NavLink } from "react-router-dom";

import {
  Link, BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
        {scrolled ? <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand> : null}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="conferences" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('conferences')}>Conferences</NavLink>
            <NavLink to="sponsors" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('sponsors')}>Sponsors</NavLink>
            <NavLink to="gallery" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('gallery')}>Gallery</NavLink>
            <NavLink to="team" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('team')}>Our Team</NavLink>
            <NavLink to="" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('involve')}>Get Involved</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
