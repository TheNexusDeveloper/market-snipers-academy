import React from 'react'
// import { Button, Card, Row} from 'react-bootstrap'
import msawp2 from '../media/msawp2.jpg'


function CarouselComponent() {
  return (
    <div>
       <div class="show">
        <img src={msawp2} alt="showcase"/>
        <div class="text">
            <h1>Learn the industry's leading skills on Market </h1> <span><h1>Snipers Academy</h1></span>
            <p>While some brokers give you a hard time, we are all about making your strategies work for you. We support you every step of the way, when you grow we grow.</p>
            <a href="/">Explore</a>
        </div>
    </div>
    </div>
  )
}

export default CarouselComponent