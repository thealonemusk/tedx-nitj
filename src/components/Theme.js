import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const Theme = () => {
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
  return (
    <div className='theme__page'>
      <div className='theme__heading'>
        <h1>REVERBERATED 2023</h1>
      </div>
      <div className='theme__animation'>
      </div>
      <div className='theme__text' ref={themeText}>
        <p>It’s a versatile, emotional, and challenging visualization typeface, and it’s very perfect as well as ideal for headlines, logos, and movie posters. It has an elegant, classic look combined with a modern feel. It’s perfectly used for advertisements, magazines, logos, signatures, apparel projects, fashion, album covers, branding, social media, and so on.

          This typeface is a clean font family and personality sophisticated sans serif. This font is inspired by the animal. And a gorgeous balance of smooth and hard lines.</p>
      </div>
    </div>
  )
}
