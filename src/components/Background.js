import React from 'react'
import Card from 'react-bootstrap/Card'

function Background() {
  return (
    <Card className="bg-dark text-black">
      <Card.Img src='https://www.instacart.com/assets/homepage-hero-background-ec75de0ea80198801094497b46ad920b.jpg' alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='mt-xl-5'><h1>Order groceries for delivery or pickup today</h1></Card.Title>
        <Card.Text>
          Whatever you want from local stores, brought right to your door
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Background