import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import character from './character.json';
gsap.registerPlugin(ScrollTrigger);
export const Theme = () => {
  const container = useRef(null);
  const themeText = useRef(null);
  useEffect(() => {
    const el = themeText.current;
    gsap.fromTo(el, { x: 500 }, {
      x: 0, duration: 2, scrollTrigger: {
        trigger: el,

        // scrub: true,
      }
    })
  }, [])
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
          <Lottie 
          animationData={character} 
          style={{ height: 500 }}

          />
          </div>
        </div>
      </div>

      
      <div class="col-md-6 col-sm-12 align-self-center">
        <div class="main">
          <div class="theme-text" ref={themeText}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
