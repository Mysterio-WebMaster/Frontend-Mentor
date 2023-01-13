import {React, useState, useEffect} from 'react'
import './style.css'
import './responsive.css'
import {Container, Row, Col} from 'react-bootstrap'
import starIcon from './assets/images/icon-star.svg'


export default function Index() {

  const [active, setActive] = useState(0);
  const [view, setView] = useState(false);

  function handleActive(value){
    document.getElementById(value).style.background = "hsl(217, 12%, 63%)";
    document.getElementById(value).style.color = "white";

    if(active != 0){
      document.getElementById(active).style.color = "white";
    }

    setActive(value)

  }

  function handleSubmit(){
      console.log(active);
  }


  useEffect(()=>{
    //console.log(active);
  })

  
  
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
                {/*<Col> <span className="value" onClick={e=>handleActive(1)} id="1">1</span></Col>
                <Col> <span className="value" onClick={e=>handleActive(2)} id="2">2</span></Col>
                <Col> <span className="value" onClick={e=>handleActive(3)} id="3">3</span></Col>
                <Col> <span className="value" onClick={e=>handleActive(4)} id="4">4</span></Col>
                <Col> <span className="value" onClick={e=>handleActive(5)} id="5">5</span></Col>*/}
            </Row> 
            <div>
                <input type="radio" name="rating" value={1} label="1"/>
                <input type="radio" name="rating" value={2} label="2"/>
                <input type="radio" name="rating" value={3} label="3"/>
                <input type="radio" name="rating" value={4} label="4"/>
                <input type="radio" name="rating" value={5} label="5"/>
            </div>
        </div>

        <br />
        <br />

        <button type="submit" onClick={handleSubmit}>SUBMIT</button>

    </Container>
    </div>
  )
}
