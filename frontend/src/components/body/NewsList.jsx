import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from '../../assets/prothomalo-bangla_2024-07-31_7ycrw77i_2.webp'

function NewsList() {
  return (
    <Card id="newsCard">
      <Card.Img variant="top" src={Image1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsList