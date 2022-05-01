import React, { useState } from 'react'
import { useParams } from 'react-router'
import Card from '../../components/Card-company/Card'
import DATA from '../../data.json'
import BANNER from '../../banner-pictures/banner.jpeg'
import '../Companies/companies.css'
import Modal from '../../components/Modal/Modal'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";





export default function Companies() {
  const { name } = useParams()

  const filteredBySector = DATA.filter((element) => element.type == name)[0]

  const { title, companies, description } = filteredBySector;

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <section className='section__companies'>

        <div className='section__companies--banner' >
          <img className='image__banner' src={BANNER} alt={BANNER} />
        </div>

        <div className='section__companies--information'>
          <h1> {title} </h1>
          <button onClick={() => {
            setOpenModal(true);
          }}>
            <img src='/img/quotemark.svg' />
          </button>

          {openModal && <Modal title={title} closeModal={setOpenModal} info={description} />}

        </div>

        <div className='section__companies--cards'>
          {companies.map(company => {
            return (
              <div className='section__div--card'>
                <Card className="tarjeta" image={company.image} name={company.name} price={company.price} id={company.id} />
              </div>
            )
          })}
        </div>

      </section >

      <div className='container__button--back'>
        <Link to="/" style={{ textDecoration: 'none', marginLeft: '10px' }}>
          <IoIosArrowBack /> back
        </Link>
      </div>
    </>
  )
}
