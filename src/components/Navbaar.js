import { useState, useEffect } from "react";
import React from 'react';
import logo from '../assets/img/tedxnitjLogoTwoLine.png';
import { NavLink, Link } from "react-router-dom";

export const Navbaar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState();
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
    <nav class={scrolled ? "navbar fixed-top scrolled" : "navbar fixed-top"}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className="header_image" src={logo} alt="Logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <h1>Hello</h1> */}
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
      <img className="header_image" src={logo} alt="Logo" />
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
          <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="conferences" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('conferences')}>Conferences</NavLink></button>
          </li>
          <li class="nav-item">
          <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="sponsors" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('sponsors')}>Sponsors</NavLink></button>
          </li>
          <li class="nav-item">
          <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="gallery" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('gallery')}>Gallery</NavLink></button>
          </li>
          <li class="nav-item">
          <button className="navHeadings" data-bs-dismiss="offcanvas"><NavLink to="team" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('team')}>Our Team</NavLink></button>
          </li>
          <li class="nav-item">
          <button className="navHeadings" data-bs-dismiss="offcanvas"><Link to="/" className='navbar navbar-nav nav-link navbar-link' onClick={() => onUpdateActiveLink('involve')}>Get Involved</Link></button>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
  )
}
