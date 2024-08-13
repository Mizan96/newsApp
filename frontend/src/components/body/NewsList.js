import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function NewsList({image, title, article, id}) {
  return (
    <>
    {/* <Card id="newsCard">
      <Card.Img variant="top" src={image} alt={image}/>
      <Card.Body>
        <Card.Title>{title.slice(0,40)}</Card.Title>
        <Card.Text>{ article.slice(0,90) }</Card.Text>
        <Link to={`/news/detail/${id}/`}><Button variant="primary" >বিস্তারিত</Button></Link>
      </Card.Body>
    </Card> */}


    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={image} fluid alt={image} />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title.slice(0,40)}</MDBCardTitle>
        <MDBCardText>
        { article.slice(0,80) }
        </MDBCardText>
        <Link to={`/news/detail/${id}/`}><MDBBtn className='btn-danger'>বিস্তারিত</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
    </>
  )
}

export default NewsList