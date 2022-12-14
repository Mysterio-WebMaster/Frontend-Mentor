import React from 'react'
import './style.css'
import './responsive.css'
import {Container, Row, Col} from 'react-bootstrap'
import productImg from './assest/images/image-product-desktop.jpg'
import cartIcon from './assest/images/icon-cart.svg'

export default function Index() {
  return (
    <Container>
        <div className='productBox'>
            <Row>
                <Col className='img'>
                    <img src={productImg} className='bg'/>
                </Col>
                <Col>
                    <div className="descBox">
                        <br />
                        <h6>P E R F U M E</h6>

                        <h3>Gabrielle Essence Eau De Parfum</h3>

                        <p className='desc'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

                        <div>
                            <span className='price'><b>$149.99</b></span> <span className='discount'> $169</span>
                        </div>                        
                        <br />

                        <button> <img src={cartIcon} className='icon' alt="" /> Add to Cart</button>

                    </div>
                </Col>
            </Row>
        </div>
    </Container>
  )
}
