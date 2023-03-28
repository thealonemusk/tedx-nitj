import React from 'react'
import { Button, Form } from "react-bootstrap";
import { Ticket } from 'react-bootstrap-icons';
import { TicketDetailedFill } from 'react-bootstrap-icons';
import { TicketPerforatedFill } from 'react-bootstrap-icons';
function TicketForm() {
  return (
    <Form style={{background:'#151515'}} className='buyTicketForm'>
            <Form.Group style={{padding:'10px', display:'flex', flexFlow:'column'}}>
                <Form.Label style={{ fontSize:'25px' }}>Ticket Fare</Form.Label>
                <Form.Label style={{margin:' 0 10px'}}><TicketDetailedFill/> NITJ: Rs 549</Form.Label>
                <Form.Label style={{margin:' 0 10px'}}><TicketDetailedFill/> NON - NITJ: Rs 799 + GST</Form.Label>
            </Form.Group>
            <Form.Group className='formGroup' style={{padding:'10px'}}>
                {/* <Form.Label style={{ fontSize:'25px' }}>Perks Included</Form.Label>
                <ul>
                    <li>Meet & greet with world-class speakers</li> 
                    <li>Exclusive merchandise </li> 
                    <li>Goodie bags</li> 
                </ul>
                    <h3 style={{alignItems:'center',display:'flex', justifyContent:'center'}} >hey, food's on us ;)</h3>
                    <p style={{alignItems:'center',padding:'10px',display:'flex', justifyContent:'center', border:'1px solid red', borderRadius:'5px'}}>Early bird discout of 10% until 3rd April on both tickets</p> */}
            </Form.Group>
            <a href='https://www.nitj.ac.in/events_registration/tedxnitj/login' target='_blank' className='bookTicketBtn'><Button block style={{padding:'10px', alignItems:'center', margin:'0 auto', display:'flex', width:'100%',justifyContent:'center', backgroundColor: 'red'}} >BOOK</Button></a>
        </Form>
  )
}

export default TicketForm