import React, { useEffect, useState } from 'react'
import Step1 from './Steps/Step 1/Step1'
import Step2 from './Steps/Step 2/Step2'
import Step3 from './Steps/Step 3/Step3'
import Step4 from './Steps/Step 4/Step4'
import './style.css'
import {Container, Row, Col} from 'react-bootstrap'


export default function Index() {


    let [step, setStep] = useState(1);

    const handleStep = (e) =>{
        //console.log(e);
        setStep(e);
    }

    useEffect (()=>{
        console.log(step)
    })

  return (
    <div>
        <Container>
        <div className="FormBox">
            <Row>
                <Col md={3}>
                    <div className="leftMenu">
                        <Row>
                            <Col md={3}>
                                {(step == 1) &&
                                    <button className="stepNumberCircleActive"   onClick={()=>handleStep(1)}>
                                        <p>1</p>
                                    </button>
                                }
                                {(step != 1) &&
                                    <button className="stepNumberCircle"   onClick={()=>handleStep(1)}>
                                        <p>1</p>
                                    </button>
                                }
                            </Col>
                            <Col>
                                <div className="stepDetails">
                                    <span className='stepNumber'>STEP 1</span>
                                    <br />
                                    <span className='stepHeading'>YOUR INFO</span>
                                </div>
                                
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={3}>
                                {(step == 2) &&
                                    <button className="stepNumberCircleActive"   onClick={()=>handleStep(2)}>
                                        <p>2</p>
                                    </button>
                                }
                                {(step != 2) &&
                                    <button className="stepNumberCircle"   onClick={()=>handleStep(2)}>
                                        <p>2</p>
                                    </button>
                                }
                            </Col>
                            <Col>
                                <div className="stepDetails">
                                    <span className='stepNumber'>STEP 2</span>
                                    <br />
                                    <span className='stepHeading'>SELECT PLAN</span>
                                </div>
                                
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={3}>
                                {(step == 3) &&
                                    <button className="stepNumberCircleActive"   onClick={()=>handleStep(3)}>
                                        <p>3</p>
                                    </button>
                                }
                                {(step != 3) &&
                                    <button className="stepNumberCircle"   onClick={()=>handleStep(3)}>
                                        <p>3</p>
                                    </button>
                                }
                            </Col>
                            <Col>
                                <div className="stepDetails">
                                    <span className='stepNumber'>STEP 3</span>
                                    <br />
                                    <span className='stepHeading'>ADD-ONS</span>
                                </div>
                                
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={3}>
                                {(step == 4) &&
                                    <button className="stepNumberCircleActive"   onClick={()=>handleStep(4)}>
                                        <p>4</p>
                                    </button>
                                }
                                {(step != 4) &&
                                    <button className="stepNumberCircle"   onClick={()=>handleStep(4)}>
                                        <p>4</p>
                                    </button>
                                }
                            </Col>
                            <Col>
                                <div className="stepDetails">
                                    <span className='stepNumber'>STEP 4</span>
                                    <br />
                                    <span className='stepHeading'>SUMMARY</span>
                                </div>
                                
                            </Col>
                        </Row>

                    </div>
                </Col>
                <Col>
                    <div className="Content">
                        {(step == 1) && 
                            <Step1 />
                        }
                        {(step == 2) && 
                            <Step2 />
                        }
                        {(step == 3) && 
                            <Step3 />
                        }
                        {(step == 4) && 
                            <Step4 />
                        }
                    </div>
                </Col>
            </Row>
            
        </div>
        </Container>
    </div>
  )
}
