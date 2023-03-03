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
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
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
              <Nav.Link href="conf" className={activeLink === 'conf' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('conf')}>Conferences</Nav.Link>
              <Nav.Link href="#sponsors" className={activeLink === 'sponsors' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sponsors')}>Sponsors</Nav.Link>
              <Nav.Link href="gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Nav.Link>
              <Nav.Link href="team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')} >Our Team</Nav.Link>
              <Nav.Link href="involve" className={activeLink === 'involve' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('involve')}>Get Involved</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
