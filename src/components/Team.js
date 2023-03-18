import React from 'react'
import './Team.css'
import TeamCard from './TeamCard'
export const Team = () => {
  return (
    <div className='team'>
    <div className='conferences'>
      <div className='conference__main'>
        <div className='team__main text-center'>
          <h1>OUR TEAM</h1>
          <h6>TECHNOLOGY ● ENTERTAINMENT ● DESIGN </h6>
        </div>
      </div>

    </div>
    <div class="SpeakerCarousel__TableContainer-sc-tve874-0 jbNFLs">
    <div class="SpeakerCarousel__Carousel-sc-tve874-2 fRhUJv">
    
    <TeamCard name="Sanchita Kapur" position="Founder, Licensee and Student Coordinator"/>
    <TeamCard name="Sanchita Kapur" position="Founder, Licensee and Student Coordinator"/>
    <TeamCard name="Sanchita Kapur" position="Founder, Licensee and Student Coordinator"/>
    <TeamCard name="Sanchita Kapur" position="Founder, Licensee and Student Coordinator"/>

    </div></div></div>
  )
}
