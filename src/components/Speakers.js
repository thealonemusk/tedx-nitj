import React from 'react'
import './Team.css'
import TeamCard from './TeamCard'
export const Speakers = () => {
  return (
    <div className='speakers'>

      <div class="SpeakerCarousel__TableContainer-sc-tve874-0 jbNFLs">
        <div className='carousel__heading'>
          <h3>SPEAKERS</h3>
        </div>
        <div class="SpeakerCarousel__Carousel-sc-tve874-2 fRhUJv">

          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>

        </div>
      </div>
    </div>
  )
}
