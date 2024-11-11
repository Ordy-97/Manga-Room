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

//import logo from '../../assets/logoMR.png'
import styled from 'styled-components'
import logo2 from '../../assets/logofinalMangaRoomFigma.png'
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../utils/Context';

const StyledMDBNavbar = styled(MDBNavbar)`
  background-color: #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); /* Ombre inférieure */
  padding: 0.5rem 1rem;
`;
const NavLink = styled(MDBNavbarLink)`
    color: #f1f4f9 !important;
    text-decoration: none;
    margin-right: 2rem;
    font-size: 1.1rem;
    position: relative;

    &:hover {
      color: #ffffff;
    }

    /* Ajout d'une ligne de soulignement pour le lien actif */
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 3px;
      background-color: ${({ isActive }) => (isActive ? 'rgba(255, 28, 247, 0.8)' : 'transparent')};
      border-radius: 2px;
      transition: background-color 0.3s ease;
    }
  `;



export default function Header() {

  const [showNavColor, setShowNavColor] = useState(false);

  const { toggleModals, currentUser } = useContext(UserContext)

  const location = useLocation()


  // console.log(modalState)

  return (
    <>

      <StyledMDBNavbar  expand='lg'  dark className='shadow-5-strong p-1 fixed-top' >
        <MDBContainer >
          <MDBNavbarBrand href='/' className=' '>
            <img src={logo2} alt="" height="50"/>
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
                <NavLink  aria-current='page' tag={Link} to="/" isActive={location.pathname === '/'} className='me-5 '>
                    Home
                </NavLink>
                <NavLink aria-current='page' tag={Link} to="/characters" isActive={location.pathname === '/characters'} className='me-5'>
                  Characters
                </NavLink>
                <NavLink tag={Link} to="/quotes" isActive={location.pathname === '/quotes'} className='me-5'>
                  Quotes
                </NavLink>
                {currentUser && 
                  <NavLink tag={Link} to="/private/private-favorites" isActive={location.pathname === '/private/private-favorites'} className='me-5'>
                    Favorites
                  </NavLink>
                }
                
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>

        {/*******Affichage conditionnée du bouton sign in et de l'icône de user connecté en fonction de currentUser(s'il est vide ou pas)****/}

        {!currentUser ? (
          <MDBBtn onClick={() => toggleModals("signIn")} style={{background: "rgba(255, 28, 247, 0.4)"}}>
            Sign In <i class="fa-solid fa-user fa-beat" style={{color: "#f1f4f9"}} />
          </MDBBtn>
        ) : (<UserConnected />)}

      </StyledMDBNavbar>

    </>
  );
}
