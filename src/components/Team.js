import React from 'react'
import TeamCard from './TeamCard'
import { TeamCardNew } from './TeamCardNew'
export const Team = () => {
  return (
    <div className='team__card'>
      <div className="row">
        <h1 className='pos text-center'><span className="makeitred">License </span>Holder</h1>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'><TeamCard name="Sanchita Kapur" position="Founder, Licensee and Student Co-ordinator" location="https://media.licdn.com/dms/image/C4D03AQHCC4AXYhV6Jg/profile-displayphoto-shrink_800_800/0/1653556763108?e=2147483647&v=beta&t=f3Qx95GduAsCHt40uab6LOyC6E_nVUb1ZFvfrdsQZBA"/></div>
        <h1 className='pos text-center'><span className="makeitred">Core </span>Team</h1>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'><TeamCard name="Paras Khosla" position="Co-Founder, Senior Executive" location="https://media.licdn.com/dms/image/C4E03AQGD9TqOp4tQWQ/profile-displayphoto-shrink_800_800/0/1637514459632?e=2147483647&v=beta&t=yOL1v0xcMk4i_CQgYoN7ORbv2jNHfUCFOOpsCh1KqRY"/></div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'><TeamCard name="Vaibhav S Thatai" position="Co-Founder, Senior Executive" location="https://media.licdn.com/dms/image/C4D03AQEUgpzL1uH9GA/profile-displayphoto-shrink_800_800/0/1654277259996?e=2147483647&v=beta&t=J_I2SUlHl-X2USq9KQx_35HPILGwrvO0bGXlTZ_XK7A"/></div>
        
        <div className='col-lg-3 col-md-4 col-sm-6'><TeamCard name="Aditya Anand" position="Co-Founder, Senior Executive" location="https://media.licdn.com/dms/image/C4D03AQEsirXazFW_pQ/profile-displayphoto-shrink_800_800/0/1667964628492?e=1683763200&v=beta&t=9rb0nK3C9KWjGKi2ZJCZhS1yFk8cC5ppUuZ9y-V6_g8"/></div>
        {/* <div className='col-lg-3 col-md-4 col-sm-6'><TeamCardNew name="Aditya Anand" description="Co-Founder, Senior Executive" speakerImage="https://media.licdn.com/dms/image/C4D03AQEsirXazFW_pQ/profile-displayphoto-shrink_800_800/0/1667964628492?e=1683763200&v=beta&t=9rb0nK3C9KWjGKi2ZJCZhS1yFk8cC5ppUuZ9y-V6_g8" isPublished={true} isLongCard={true}/></div> */}
        
        
        </div>
    </div>
  )
}
