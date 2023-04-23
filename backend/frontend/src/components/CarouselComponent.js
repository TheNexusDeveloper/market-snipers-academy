import React from 'react'
// import { Button, Card, Row} from 'react-bootstrap'
import msawp2 from '../media/msawp2.jpg'


function CarouselComponent() {
  return (
    <div>
       <div class="showcase">
        <img src={msawp2} alt="showcase"/>
        <div class="text">
            <h1>Learn the industry's leading skills on Market </h1> <span><h1>Snipers Academy</h1></span>
            <p>Looking to start a great career in the Business World, then this is the right platform for you. We have put together a team consisting of profitable individuals in the tech and business world.</p>
            <a href="/">Explore</a>
        </div>
    </div>
    </div>
  )
}

export default CarouselComponent