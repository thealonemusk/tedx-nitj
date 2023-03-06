import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/tedxnitjLogoTwoLine.png';

import {
  Link
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
            <img src= {logo} alt="Logo"/>
          </Navbar.Brand> : null }
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link to="/conferences" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('conferences')}>Conferences</Link>
              <Link to="/sponsors" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('sponsors')}>Sponsors</Link>
              <Link to="/gallery" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('gallery')}>Gallery</Link>
              <Link to="/team" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('team')}>Our Team</Link>
              <Link to="/involve" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('involve')}>Get Involved</Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
