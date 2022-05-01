import React from 'react'
import '../Modal/modal.css'

function Modal(props) {
  return (
    <div className='modal__background'>
      <div className='modal__container'>
        <div className='body'>
          <h2> {props.title} </h2>
          <p>{props.info}</p>
        </div>
        <button onClick={() => props.closeModal(false)}> X </button>
      </div>
    </div>
  )
}

export default Modal