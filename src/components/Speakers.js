import React from 'react'
import './Team.css'
import SpeakerCard from './SpeakerCard'
export const Speakers = () => {
  return (
    <div className='speakers'>

      <div class="SpeakerCarousel__TableContainer-sc-tve874-0 jbNFLs">
      <div className='carousel__heading speakers__heading'>
        <h3>SPEAKERS</h3>
      </div>
        <div class="SpeakerCarousel__Carousel-sc-tve874-2 fRhUJv">

          <SpeakerCard name="Chef Pankaj Bhadouria" position="Masterchef | Restaurateur | Speaker | Author |" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_ghxXgM842OMcO3ks16qBoNxnjdUuxJZDg&usqp=CAU"/>
          <SpeakerCard name="Devinder Maheshwari & Kapil Jindal" position="Founders, Beebom" source="https://www.forbesindia.com/media/digital-stars/Beebom_H.webp"/>
          <SpeakerCard name="Dr. Deepti Pinto Rosario" position="OB/GYN | Female Healthcare Activist" source="https://pintorosariohospital.com/wp-content/uploads/2019/07/1J3A9840-min1-1-700x800.jpg"/>
          <SpeakerCard name="Praachi Nagpal" position="Miss Grand India 2022 | Model" source="https://www.sakshi.com/web-stories/article_images/2022/09/13/Miss%20Grand%20India%202022%20Prachi%20nagpal-7_1663033702.jpg"/>
          <SpeakerCard name="Sandeep Sarma" position="Head of Design and Content, Xiaomi India" source="https://media.licdn.com/dms/image/D5603AQHCdWcFndwU8g/profile-displayphoto-shrink_800_800/0/1671101820207?e=2147483647&v=beta&t=Vv4_gXhKOm2KA7SLbEA2JT_DWEWr121bu3DnioZ4ZxY"/>
          <SpeakerCard name="Sudhir R" position="India's First Flute boxer | Asia's Got Talent Finalist" source="https://media.licdn.com/dms/image/C4D03AQGq05XsZardbQ/profile-displayphoto-shrink_800_800/0/1626330698761?e=2147483647&v=beta&t=N850UThHsPDyjpdIfXwRA1S_34qw-eu7Qa7NO5Yvj4s"/>

        </div>
      </div>
    </div>
  )
}
