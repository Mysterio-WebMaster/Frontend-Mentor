import {React, useState, useEffect} from 'react'
import './style.css'
import './responsive.css'
import {Container, Row, Col} from 'react-bootstrap'
import starIcon from './assets/images/icon-star.svg'
import Thankyou from './Thankyou'


export default function Index() {

  let [value, setValue] = useState();
  let [active, setActive] = useState(false);

  function handleChange(e){
      setValue(e.target.value);
  }

  function submitRating(e){
      e.preventDefault();
      console.log(value);
      setActive(true)
  }


  // useEffect(()=>{
  //   //console.log(active);
  // })

  if(active == false){
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
              <form>
              <div>
                  <input type="radio" name="rating" value={1} label="1" onChange={handleChange}/>
                  <input type="radio" name="rating" value={2} label="2" onChange={handleChange}/>
                  <input type="radio" name="rating" value={3} label="3" onChange={handleChange}/>
                  <input type="radio" name="rating" value={4} label="4" onChange={handleChange}/>
                  <input type="radio" name="rating" value={5} label="5" onChange={handleChange}/>
              </div>
              <br />
              <br />
  
              <button onClick={submitRating}>SUBMIT</button>
                
              </form>
              
          </div>
  
          
  
      </Container>
      </div>
    )
    
  }else{
    return(
    <Thankyou rating = {value}/>
    )
  }
  
  
}
