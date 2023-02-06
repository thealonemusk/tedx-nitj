import React, { useState, useEffect } from 'react'

export const FixedBack = () => {
  const [mass, setMass] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setMass(Math.min(20, 1 + 0.005 * this.scrollTop()));
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const mystyle = {
    color: "white",
    fontWeight: "900",
    letterSpacing: "-1px",
    fontFamily: "HelveticaNeueLTStd,sans-serif",
    fontSize: "5vw",
    // position: "fixed",
   
   
    // transformOrigin: "center top",
    // transform: `scale(${mass})`,
  };
  return (
    <div className='fixedBack'>
      {/* <div className='fixedBack__none'></div> */}
      <div className='fixedBack__heading'>
        <h1 style={mystyle}>REVERBERATED '23</h1>
      </div>
    </div>
  )
}

