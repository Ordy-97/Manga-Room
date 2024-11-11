import React, { useContext } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import '../../css/card.css'
import { IdContext } from '../../utils/Context';

export default function CardWaifuFavorite({url, id, isLoading3, DeleteFav, refreshFavorites}) {

  const { ChangeId } = useContext(IdContext)
  const handleDeleteFav = () =>{
    ChangeId(id)
    DeleteFav(id, refreshFavorites)
  }
  return (
    <MDBCard style={{
      borderBlockColor: 'rgba(255, 28, 247, 0.4)',
      borderInlineColor: '#3b71ca'
    }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay card'>
        <MDBCardImage className='card-img' src={url} fluid alt='...' />
      </MDBRipple>
      <MDBCardBody>
        <MDBCardText>
          You can use it for your profile
        </MDBCardText>
        <MDBBtn onClick={handleDeleteFav}>Remove</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}