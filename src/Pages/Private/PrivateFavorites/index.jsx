import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import CardWaifuFavorite from '../../../Components/CardWaifuFavorite'
import { useDeleteFavFetch, useGetFavoritesFetch } from '../../../utils/hooks'
import { Loader } from '../../../utils/Loader'

export default function PrivateFavorites() {
  const {imagesFavList, isLoading, FetchFavorites} = useGetFavoritesFetch()
  const { isLoading3, DeleteFav } = useDeleteFavFetch()
  return (
    <MDBContainer className="mt-5" 
      style={{
       paddingTop: '100px',
      }}
    >
      {/* <Categories /> */}
      {isLoading ? (
        <MDBContainer className="d-flex justify-content-center mt-5">
          <Loader /> <br /><br /><br /><br /><br /><br />
          Loading...
        </MDBContainer>
      ) : (
            <div className="row">
              {imagesFavList.map((element) => (
                <div 
                  className="col-12 col-md-6 col-lg-4 mb-3" // Définit la mise en page responsive
                  key={element['signature']}
                >
                  <CardWaifuFavorite
                    url={element['url']}
                    id={element['image_id']}
                    isLoading3 = {isLoading3}
                    DeleteFav = {DeleteFav}
                    refreshFavorites = {FetchFavorites}
                  />
                </div>
              ))}
            </div>
      )}
    </MDBContainer>
  )
}
