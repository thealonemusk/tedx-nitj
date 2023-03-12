import React from 'react'
import { Button, Form } from "react-bootstrap";
function TicketForm() {
  return (
    <Form style={{background:'black'}}>
            <Form.Group style={{padding:'10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    required
                />
            </Form.Group>
            <Form.Group style={{padding:'10px'}}>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    required
                />
            </Form.Group>
            <Form.Group style={{padding:'10px'}}>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                />
            </Form.Group>
            <Form.Group style={{padding:'10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    required
                />
            </Form.Group>
            <Button type="submit" block style={{padding:'10px', alignItems:'center', margin:'0 auto', display:'flex', width:'100%',justifyContent:'center', backgroundColor: 'red'}}>BOOK</Button>
        </Form>
  )
}

export default TicketForm
