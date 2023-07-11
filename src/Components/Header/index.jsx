import React, { useState, useContext } from 'react';
import UserConnected from '../UserConnected';
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

import logo from '../../assets/logoMR.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/Context';



export default function Header() {

  const [showNavColor, setShowNavColor] = useState(false);

  const { toggleModals, currentUser } = useContext(UserContext)



  // console.log(modalState)

  return (
    <>

      <MDBNavbar  expand='lg'  dark className='shadow-5-strong p-1 fixed-top' style={{backgroundColor : '#000000'}} >
        <MDBContainer >
          <MDBNavbarBrand href='/' className=' '>
            <img src={logo} alt="" height='50' />
            Manga Room
          </MDBNavbarBrand>
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

        {/*******Affichage conditionnée du bouton sign in et de l'icône de user connecté en fonction de currentUser(s'il est vide ou pas)****/}

        {!currentUser ? (
          <MDBBtn onClick={() => toggleModals("signIn")}>
            Sign In <i class="fa-solid fa-user fa-beat" style={{color: "#f1f4f9"}} />
          </MDBBtn>
        ) : (<UserConnected />)}

      </MDBNavbar>

    </>
  );
}
