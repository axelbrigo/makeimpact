import React from 'react'
import { Link } from 'react-router-dom'
import '../Sectors/sectors.css'
import DATA from '../../data.json'
import Card from '../Card-company/Card'


export default function Sectors(props) {

  const sector = DATA.filter((sector) => sector.type == props.types)
  console.log(sector)
  return (

    <section className='section__sectors'>
      <div className='picture__sectors' style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 20, 0) 12%, rgba(10, 10, 20, 0.6) 44%, #0a0a14), url(${require(`../../../images/${props.image}.jpeg`)})` }}>
        <div className='main__picture-text'>
          <div className='picture__text'>
            <p>{props.sector}</p>
            <Link className='view__all--button' to={`/companies/${props.types}`}>View All </Link>
          </div>

          <div className='companies__container' >
            {sector[0].companies.map((company) => <Card image={company.image} name={company.name} price={company.price} id={company.id} />)}
          </div>
        </div>
      </div>

    </section >
  )
}
