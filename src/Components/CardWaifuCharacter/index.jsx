import React from 'react'

import '../../css/card.css'


function CardWaifuCharacter({url}) {

  return (
    <div className="card">
      <img src={url} alt="" className='card-img'/>
      <div className="card-body">
        <h2 className="card-text">Add to your Gallerie?</h2>
        <button type="button" className='card-btn'>💖</button>
      </div>
    </div>
  )
}

export default CardWaifuCharacter

