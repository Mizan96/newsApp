import React from 'react'
import TopBar from '../components/TopBar'
import Bottom from '../components/Bottom'
import {Link} from 'react-router-dom' 
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';
function RegisterScree() {
  return (
    <>
    <TopBar />
    <br></br>
    <MDBContainer>

    <MDBRow center>
      <MDBCol className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <h1 className='text-center'>রেজিস্টার</h1>
        <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

      

      <MDBBtn type='submit' className='mb-4' block>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    <br></br>
    <Bottom />
    </>
  )
}

export default RegisterScree