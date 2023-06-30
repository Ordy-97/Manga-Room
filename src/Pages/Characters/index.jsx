import { MDBContainer } from 'mdb-react-ui-kit'
import Card from '../../Components/Card'
import { Loader } from '../../utils/Loader';
import { useAxios } from '../../utils/hooks';
import Categories from '../../Components/Categories';
import { useContext } from 'react';
import { UrlContext } from '../../utils/Context';

function Characters() {
  const {url} = useContext(UrlContext)
  const { imagesList, isLoading } = useAxios(url)

  console.log(imagesList)

  return (
    <MDBContainer className='mt-5'>
      
      <Categories />
      {isLoading ? (
        <MDBContainer className='d-flex justify-content-center mt-5'>
          <Loader /> <br/>
          Loading...
        </MDBContainer>
        ):(
          <div className="row">
            {imagesList.map((element) => (
              <div className="col-md-4 mb-3">
                <Card 
                  // key = {`${element}-${index}`}
                  key={element['signature']}
                  url={element['url']}
                />
              </div>  
            ))}
        </div>
        )
      }
          Abeck fonctionne!
    </MDBContainer>
  )
}

export default Characters
