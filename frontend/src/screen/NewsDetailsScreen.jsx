import TopBar from '../components/TopBar'
import Bottom from '../components/Bottom'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getArtticleDetailFromServer from '../store/article-detail-action';
import { Col, Container, Row } from 'react-bootstrap';

function NewsDetailsScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.articleDetail.data);
  const {id} = useParams();
  console.log(id)
  console.log(data);

  useEffect(() =>{
    dispatch(getArtticleDetailFromServer(id));
  },[dispatch]);

  return (
    <>
    <TopBar />
    <Container>
      <Row>
        <Col xl={9} lg={9}>
        {/* <p>{data.category}</p> */}
        <h1 className='display-6'>{data.title}</h1>
        <div className='border'></div>
        <img  className='rounded my-2 mx-auto d-block'  src={`http://127.0.0.1:8000${data.image}` } />
        <p>{data.description}</p>
        <div className='border'></div>
        <p className='py-2 text-justify'>{data.article}</p>
        </Col>
      </Row>
    </Container>
    
    
    <Bottom />
    </>
  )
}

export default NewsDetailsScreen