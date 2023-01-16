import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'

export default function Step1() {
  return (
    <Container>
        <div className="Header">
            <h3>Personal info</h3>
            <p>Please provide your name, email address and phone number</p>
        </div>
        <br />
        <div className="formContent">
          <form>
            <label>Name</label><br />
            <input type="text" placeholder='e.g. Stephen King' id='name' required/><br />

            <label>Email Address</label><br />
            <input type="email" placeholder='e.g. stephenking@lorem.com' id='email' required/><br />

            <label>Phone Number</label><br />
            <input type="number" placeholder='e.g. +1 234 567 890' id='number' required/><br />
            <button className='nextStep'>Next Step</button>
          </form>
        </div>
        
    </Container>
  )
}
