import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewsList({image, title, article, id}) {
  return (
    <>
    <Card id="newsCard">
      <Card.Img variant="top" src={`http://127.0.0.1:8000${image}`} alt={image}/>
      <Card.Body>
        <Card.Title>{title.slice(0,40)}</Card.Title>
        <Card.Text>{ article.slice(0,90) }</Card.Text>
        <Link to={`/news/${id}/`}><Button variant="primary" >বিস্তারিত</Button></Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default NewsList