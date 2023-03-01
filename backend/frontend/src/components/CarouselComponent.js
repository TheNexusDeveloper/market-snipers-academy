import React from 'react'
import { Button, Card } from 'react-bootstrap'
import msawp2 from '../media/msawp2.jpg'


function CarouselComponent() {
  return (
    <div>
       <Card className="bg-dark text-white">
      <Card.Img src={msawp2} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Learn the latest industry leading skills on Market Snipers Academy </Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Button variant='warning'>Explore</Button>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default CarouselComponent