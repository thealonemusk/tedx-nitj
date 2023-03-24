import React from 'react'
import { Button, Form } from "react-bootstrap";
function TicketForm() {
  return (
    <Form style={{background:'black'}} className='buyTicketForm'>
            <Form.Group style={{padding:'10px', display:'flex', flexFlow:'column'}}>
                <Form.Label style={{ fontSize:'25px' }}>Ticket Fare</Form.Label>
                <Form.Label style={{margin:' 0 10px'}}>NITJ: Rs 549</Form.Label>
                <Form.Label style={{margin:' 0 10px'}}>NON - NITJ: Rs 799 + GST</Form.Label>
            </Form.Group>
            <Form.Group style={{padding:'10px'}}>
                <Form.Label style={{ fontSize:'25px' }}>Perks Included</Form.Label>
                <ul>
                    <li>Meet & greet with world-class speakers</li> 
                    <li>Exclusive merchandise </li> 
                    <li>Goodie bags</li> 
                </ul>
                    <h3 style={{alignItems:'center',display:'flex', justifyContent:'center'}} >hey, food's on us ;)</h3>
                    <p style={{alignItems:'center',padding:'10px',display:'flex', justifyContent:'center', border:'1px solid red', borderRadius:'5px'}}>Early bird discout of 10% until 3rd April on both tickets</p>
            </Form.Group>
            <Button type="submit" block style={{padding:'10px', alignItems:'center', margin:'0 auto', display:'flex', width:'100%',justifyContent:'center', backgroundColor: 'red'}} onClick>BOOK</Button>
        </Form>
  )
}

export default TicketForm