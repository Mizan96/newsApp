import React from 'react'
import TabContainer  from './body/TabContent'
import { Col, Container, Row} from 'react-bootstrap'
import Slider from './body/Slider'
import NewsList from './body/NewsList'

function Body() {
  const arr = [1,2,3,4,5,6,7,8]
  return (
      <div id='body'>

      <Container>
        <Row className='border-bottom py-2 border-2'>
            <Col className='border-end px-2 border-2' lg={6} md={12}>
            <Slider />
            </Col>
            <Col  lg={6} md={12}>
            <TabContainer/>
            </Col>
        </Row>
        
        <Row>
          <p className='display-6 text-primary'>Latest News</p>
          {arr.map(item => 
            <Col lg={3} className='my-2'>
            <NewsList />
            </Col>
          )}
          </Row>
        
    </Container>
    <h1>Hello World</h1>
    </div>

  )
}

export default Body