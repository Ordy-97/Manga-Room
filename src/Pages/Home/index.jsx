import React from 'react'
import { Link } from 'react-router-dom'
import LandHome from '../../assets/LandHome.svg'
import { MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
// import Title from '../../Components/Title'
import colors from '../../utils/colors'
import '../../css/home.css'



function Home() {
  return (
    <MDBContainer fluid  className='position-relative' style={{
      width: '1024',
      height: '821px',
      background: `${colors.backgroundDark}`,
      minHeight: '100vh', // assure que le conteneur prend la hauteur complète de l'écran
      overflow: 'hidden' // empêche tout débordement de contenu
    }}>
      <MDBContainer fluid >
        <img src={LandHome} alt='Wow!!!' className='img-fluid position-absolute top-0 start-0 '
          style={{
            objectFit: 'cover', 
            opacity: '0.9', // légère transparence pour l'image
            // zIndex: '-1' // l'image reste en arrière-plan
          }}
        />
      </MDBContainer>
      <MDBContainer className='text-lg-start fs-1 fw-bold text-white p-5 m-5 w-50 position-absolute top-0 start-0 title' 
        style={{
          maxWidth: '800px',
          zIndex: '1' // l'image reste en arrière-plan
        }}
      >
        Find all your Manga's characters and their best quotes here. <br/>
        <nav>
          <Link to="/characters">
            <MDBBtn type="button" className="btn  rounded-pill  px-5 mt-5 p-3 button" >
              <MDBIcon far icon="grin-wink" /> Started
            </MDBBtn>
          </Link>
        </nav>
      </MDBContainer>
    </MDBContainer>
  )
}
export default Home