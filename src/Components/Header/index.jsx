import React, { useState, useContext } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Header() {

  const [showNavColor, setShowNavColor] = useState(false);
  const { toggleModals } = useContext(UserContext)

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      alert("For some reasons, we can't deconnect! Please check your internet connexion and retry.")
    }
  }

  // console.log(modalState)

  return (
    <>

      <MDBNavbar  expand='lg'  dark className='shadow-5-strong p-1 fixed-top' style={{backgroundColor : '#000000'}} >
        <MDBContainer >
          <MDBNavbarBrand href='/' className=' '>Manga Room</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar id='navbarColor02' >
            <MDBNavbarNav right fullWidth={false} className='me-5 mb-2 mb-lg-0'> 
                <MDBNavbarLink  aria-current='page' tag={Link} to="/" className='me-5 '>
                    Home
                </MDBNavbarLink>
                <MDBNavbarLink aria-current='page' tag={Link} to="/characters" className='me-5'>Characters</MDBNavbarLink>
                <MDBNavbarLink tag={Link} to="/quotes" className='me-5'>Quotes</MDBNavbarLink>
                <MDBNavbarLink tag={Link} to="/private/private-favorites" className='me-5'>Favorites</MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
        <MDBBtn onClick={() => toggleModals("signIn")}>
          Sign In
        </MDBBtn>
        <MDBBtn onClick={logOut}>
          Log out
        </MDBBtn>
      </MDBNavbar>

    </>
  );
}
