import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const FixedBack = () => {
const fixedHeading = useRef(null);
// useEffect(()=> {
//   const el = fixedHeading.current;
//   gsap.fromTo(el , {fontSize : 50}, {fontSize: 100, scrollTrigger:{
//     // start: "top center",
//     trigger: el,

//     scrub: true,
//     // markers: true,

//   }})
// },[])
  const mystyle = {
    color: "white",
    fontWeight: "900",
    letterSpacing: "-1px",
    fontFamily: "HelveticaNeueLTStd,sans-serif",
    fontSize: "40",
    textAlign: "left"
    // position: "fixed",
   
   
    // transformOrigin: "center top",
    // transform: `scale(${mass})`,
  };
  return (
    <div className='fixedBack'>
      {/* <div className='fixedBack__none'></div> */}
      {/* <div className='fixedBack__heading'>
        <h1 style={mystyle} ref={fixedHeading}>REVERBERATED '23</h1>
      </div> */}
      <div className='heading__mobile'>
        <h1 ref={fixedHeading}>REVER</h1>
        <h1>BERA</h1>
        <h1>TED </h1>
        <h1>2023</h1>
      </div>
    </div>
  )
}

