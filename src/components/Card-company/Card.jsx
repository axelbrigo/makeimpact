import React from 'react'
import './card.css'

export default function Card({ image, name, price, id }) {
  return (

    < div key={id} className='companies__square' >

      <div className='image__logo'><img src={image} alt={name} /></div>
      <div className='companies__logo--info'>
        <h5>{name}</h5>
        <p>{price}</p>

      </div>


    </div >
  )
}
