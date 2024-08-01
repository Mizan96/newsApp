import React from 'react'
import { Container } from 'react-bootstrap'

function AboveTop() {
  let currentTime = new Date();
  const daysName = ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"]
  return (
    <>
    <div className='border-bottom py-3 px-5  bg-eeeded '>
      <br />
      <br />
      <br />
      <br />
        <Container>
         <span className='text-primary fw-bold display-6'>দৈনিক বার্তা</span>
        <p>{daysName[currentTime.getDay()+1]} | জুলাই ৩১, ২০২৪  </p>
        </Container>
    </div>
    </>
  )
}

export default AboveTop