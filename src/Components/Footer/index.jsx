import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    
        <MDBFooter className='bg-dark text-center text-white fixed-bottom ' >
            <MDBContainer className='p-1 '>
                <section className='mb-1'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Start Learning: 
                <a className='text-white' href='https://mdbootstrap.com/'>
                     MangaDex.com
                </a>
            </div>
        </MDBFooter>
    
  );
}