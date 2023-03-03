import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const FixedBack = () => {
const fixedHeading = useRef(null);
useEffect(()=> {
  const el = fixedHeading.current;
  gsap.fromTo(el , {fontSize : 40}, {fontSize: 80, duration: 8, scrollTrigger:{
    trigger: el,
    scrub: true,

  }})
},[])
  const mystyle = {
    color: "white",
    fontWeight: "900",
    letterSpacing: "-1px",
    fontFamily: "HelveticaNeueLTStd,sans-serif",
    fontSize: "40",
    // position: "fixed",
   
   
    // transformOrigin: "center top",
    // transform: `scale(${mass})`,
  };
  return (
    <div className='fixedBack'>
      {/* <div className='fixedBack__none'></div> */}
      <div className='fixedBack__heading'>
        <h1 style={mystyle} ref={fixedHeading}>REVERBERATED '23</h1>
      </div>
    </div>
  )
}

