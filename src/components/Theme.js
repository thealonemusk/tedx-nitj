import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import character from './character.json';
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Zoom } from 'react-awesome-reveal';
gsap.registerPlugin(ScrollTrigger);
export const Theme = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  const container = useRef(null);
  const themeText = useRef(null);
  // useEffect(() => {
  //   const el = themeText.current;
  //   gsap.fromTo(el, { x: 500 }, {
  //     x: 0, duration: 2, scrollTrigger: {
  //       trigger: el,

  //       // scrub: true,
  //     }
  //   })
  // }, [])
  // useEffect(()=>{
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     // animationData: require("https://assets9.lottiefiles.com/packages/lf20_43vMqxYiFk.json")
  //     path: "https://assets9.lottiefiles.com/packages/lf20_43vMqxYiFk.json"
  //   })

  // },[])
  return (
    <div className='theme__page'>
      {/* <div className='theme__heading'>
        <h1>REVERBERATED 2023</h1>
      </div> */}
      <div class="row">
        <div class="col-md-6 col-sm-12">


          <div class="sidenav">
            <div class="login-main-text">
              {/* <iframe src="https://embed.lottiefiles.com/animation/138377"></iframe> */}
              <Reveal keyframes={customAnimation} triggerOnce>
              <Lottie
                animationData={character}
                style={{ height: 500 }}

              /></Reveal>
            </div>
          </div>
        </div>

        
        <div class="col-md-4 col-sm-12 align-self-center">
          <div class="main">
            <div class="theme-text">
            <Fade direction='right' triggerOnce>
              <p>The theme of our event is “ReverberaTED” which in its very essence alludes to the echoes of our thoughts, our ideas, and the stories we create while we navigate through life. Our lives might be series of fleeting moments but the footprints we leave on the sand of time are indelible. Nothing we ever think, speak, or do perishes but keeps reverberating through the universe.</p>
            </Fade>
            </div>
          </div>
        </div>
        
        <div className='col-lg-2 col-md-12 theme-last '><Zoom triggerOnce>
          <h1>REVERBERA<span className = "ted">TED</span></h1></Zoom>
        </div>
      </div>
    </div>
  )
}
