import React from 'react'
import header from '../assets/img/girl.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/email.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
const TeamCard = ({name, position, location}) => {
    return (
        <div class="profile">
            <img src={location} alt="" class="pro_img" />
            <div class="dtl">
                <h1 class="name">{name}</h1>
                <h3 class="bio">{position}</h3>
                <div className="social-icon social">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default TeamCard