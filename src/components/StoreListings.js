import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function StoreListings() {
  return (
    <div><h2>Browse stores in Houston</h2>
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
            <Row>
                <Col xs=".5" >
                    <Image src="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
            <Col sm="1"></Col>
            <Row >
                <Col xs=".5">
                    <Image src="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/133/797e4d4c-4e74-4c2a-bde3-b525e71c4302.png" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>Food Lion</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
            <Col sm="1"></Col>
            <Row >
                <Col xs=".5" >
                    <Image src="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png" roundedCircle />
                </Col>
                <Col md="6">
                    <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                    <p>Delivery</p>
                </Col>
            </Row>
        </Row>
        </Container>
    </div>
  )
}

export default StoreListings