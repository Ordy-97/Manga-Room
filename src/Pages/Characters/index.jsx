import { MDBContainer } from 'mdb-react-ui-kit'
import CardWaifuCharacter from '../../Components/CardWaifuCharacter'
import { Loader } from '../../utils/Loader';
import { useAxios, useDeleteFavFetch, useGetFavoritesFetch, usePostFetch } from '../../utils/hooks';
import Categories from '../../Components/Categories';
import { useContext, useEffect } from 'react';
import { UrlContext } from '../../utils/Context';

function Characters() {
  const { url } = useContext(UrlContext)
  const { imagesList, isLoading } = useAxios(url)
  const {isLoading2, AddFav} = usePostFetch() //fonction pour ajouter des favoris
  const { imagesFavList, FetchFavorites } = useGetFavoritesFetch()
  const { isLoading3, DeleteFav } = useDeleteFavFetch()


  // UseEffect pour s'assurer qu'aucun rechargement de page ne survienne
  useEffect(() => {
    // Vous pouvez faire des vérifications ou initialisations ici si nécessaire
  }, [url]);

  console.log(imagesList);
  // console.log(imagesFavList)

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
          <div className="col-12 col-lg-3 mb-3">
            <Categories isLoading={isLoading}/>
          </div>
          <div className='col-12'>
            <div className="row">
              {imagesList.map((element) => (
                <div 
                  className="col-12 col-md-6 col-lg-4 mb-3" // Définit la mise en page responsive
                  key={element['signature']}
                >
                  <CardWaifuCharacter
                    url={element['url']}
                    id={element['image_id']}
                    isLoading2 = {isLoading2}
                    isLoading3 = {isLoading3}
                    isFavorite = {imagesFavList.find(fav => fav.image_id === element['image_id']) ? true : false}
                    DeleteFav = {DeleteFav}
                    AddFav = {AddFav}
                    refreshFavorites = {FetchFavorites}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </MDBContainer>
  )
}

export default Characters
