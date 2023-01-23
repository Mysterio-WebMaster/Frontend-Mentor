import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import arcadeSvg from './icon-arcade.svg'
import advancedSvg from './icon-advanced.svg'
import proSvg from './icon-pro.svg'

export default function Step2() {
  return (
    <Container>
      <div>
        <div className="Header">
          <h3>Select Your Plan</h3>
          <p>You have the option of monthly or yearly billing</p>
        </div>
        <br />
        <div className="Billing">
          <Row>
            <Col md={4}>
              <div className="billCard">
                <img src={arcadeSvg} alt="" />
                <div className="desc">
                  <h5>Arcade</h5>
                  <p>$9/mo</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="billCard">
                <img src={advancedSvg} alt="" />
              </div>
              Advanced
            </Col>
            <Col md={4}>
              <div className="billCard">
                <img src={proSvg} alt="" />
              </div>
              Pro
            </Col>
          </Row>
        </div>
      </div>

    </Container>
  )
}
