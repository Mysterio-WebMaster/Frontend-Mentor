import React from 'react'
import './style.css'
import './responsive.css'
import {Container, Row, Col} from 'react-bootstrap'
import starIcon from './assets/images/icon-star.svg'

export default function Index() {
  return (
    <div className="RatingBox">    
    <Container>

        <div className="starBox">
            <img src={starIcon}/>
        </div>

        <h3>How did we do?</h3>
        <p className='desc'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <br />

        <div className="Ratings">
            <Row>
                <Col> <span className="value">1</span></Col>
                <Col> <span className="value">2</span></Col>
                <Col> <span className="value">3</span></Col>
                <Col> <span className="value">4</span></Col>
                <Col> <span className="value">5</span></Col>
            </Row>
        </div>

        <br />
        <br />

        <button type="submit">SUBMIT</button>

    </Container>
    </div>
  )
}
