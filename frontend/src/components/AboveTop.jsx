import React from 'react'
import { Container } from 'react-bootstrap'

function AboveTop() {
  let currentTime = new Date();
  const daysName = ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"]
  return (
    <>
    <div className='bg-eeeded'>

    {/* <p>Hello</p> */}
    </div>
    <div className='border-top border-warning py-3 px-5 border-5'>
        <Container>
         <span className='text-primary fw-bold display-6'>দৈনিক বার্তা</span>
        <p>{daysName[currentTime.getDay()+1]} | জুলাই ৩১, ২০২৪  </p>
        </Container>
    </div>
    </>
  )
}

export default AboveTop