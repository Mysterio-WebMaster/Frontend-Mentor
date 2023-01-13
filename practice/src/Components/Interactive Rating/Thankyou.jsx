import React from 'react'
import './style.css'
import {Container, Row, Col} from 'react-bootstrap'
import topImg from './assets/images/thank-you.svg'

export default function Thankyou(props) {
  return (
    <div className="ThankyouBox">    
    <Container>
        <img src={topImg} alt="" />
        <br />

        <div className="content">
          <div className="ratings">
            <p>You Selected {props.rating} out of 5</p>
          </div>

          <h3>Thank you!</h3>
          <br />
          <p>We Appreciate you taking the time to give a rating.<br />if you ever need more support, don't hesistate to get in touch</p>

        </div>

        
    </Container>
    </div>
  )
}
