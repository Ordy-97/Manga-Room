import React, {useContext} from 'react'
import { IdContext } from '../../utils/Context'
import { SmallLoader } from '../../utils/Loader'

import '../../css/card.css'

function CardWaifuCharacter({url, id, isLoading2, isLoading3, isFavorite, DeleteFav, AddFav, refreshFavorites}) {
  
  const {IdFavorite, ChangeId} = useContext(IdContext)
  console.log(IdFavorite)

  const handleAddFav = () =>{
    ChangeId(id)
    AddFav(id, refreshFavorites)
  }

  const handleDeleteFav = () =>{
    ChangeId(id)
    DeleteFav(id, refreshFavorites)
  }

  // console.log(favState)
  return (
    <div className="card" style={{
        borderBlockColor: 'rgba(255, 28, 247, 0.4)',
        borderInlineColor: '#3b71ca'
      }}
    >
      <img src={url} alt="" className='card-img'/>
      <div className="card-body">
        <h2 className="card-text">
          { isFavorite ?  //ou utiliser la méthode find()
            "One of my collection 🤩" : "Add to your Gallerie?" 
          }
        </h2>

        { isFavorite ?  ( 
          <button type="button" onClick={handleDeleteFav} className="card-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {isLoading3 ? (
              <>
                <span style={{ marginRight: "8px" }}>Wait...</span>
                <SmallLoader />
              </>
            ) : (
              "remove it !"
            )}
          </button>
        ):(
          <button type="button" onClick={handleAddFav} className="card-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            { isLoading2 ? (
              <>
                <span style={{ marginRight: "8px" }}>Wait...</span>
                <SmallLoader />
              </>
            ) :( 
              "💖"
            )}
          </button>
          )
        } 
        {/* <h2 className="card-text">Add to your Gallerie?</h2>
        <button type="button" onClick={() => ChangeId(id)} className='card-btn'>Add it !</button> */}
      </div>
    </div>
  )
}

export default CardWaifuCharacter

