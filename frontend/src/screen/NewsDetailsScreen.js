import TopBar from '../components/TopBar'
import Bottom from '../components/Bottom'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getArtticleDetailFromServer from '../store/article-detail-action';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


function NewsDetailsScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.articleDetail.data);
  const { id } = useParams();
  console.log(id)
  console.log(data);

  useEffect(() => {
    dispatch(getArtticleDetailFromServer(id));
  }, [dispatch]);

  return (
    <>
      <TopBar />
      <MDBContainer>
        <MDBRow>
          <MDBCol xl={9} lg={9}>
            <p className='text-danger py-2'>{data.category.category}</p>
            <h1 className='display-6'>{data.title}</h1>
            <p className='py-2'>লেখকঃ <strong>{data.author.name}</strong></p>
            <p className='py-2'>পোস্ট করা হয়েছেঃ <strong>{data.timesince}</strong></p>
            <div className='border'></div>
            <img className='rounded my-2 mx-auto d-block' src={data.image} />
            <p>{data.description}</p>
            <div className='border'></div>
            <p className='py-2 text-justify'>{data.article}</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      <Bottom />
    </>
  )
}

export default NewsDetailsScreen