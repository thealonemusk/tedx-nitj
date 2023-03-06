import React from 'react'
import logo from '../assets/img/tedxnitjLogoTwoLine.png';
export const Banner = () => {
  return (
    <div className='banner'>
      <div className='row'>

      <div className='col-md-6 banner__left'>
        <img src = {logo} alt = "LOGO"/>
        <p>TEDx NITJalandhar is an annual event that aims to bring together inquisitive minds and spark engaging conversations. With a confluence of thought provoking speakers, we hope to bring forward fresh perspectives and novel concepts, giving every participant something to take home.</p>

      </div>
      <div className='col-md-6 banner__right'>
        <button className="vvd"><span>BUY TICKETS</span></button>

      </div>
      </div>
    </div>
  )
}


