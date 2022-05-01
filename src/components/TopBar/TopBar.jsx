import React from 'react'
import '../TopBar/topbar.css'

function TopBar() {
  return (
    <div className='container__topbar'>
      <div className='container__user'>
        <img src='/img/user.svg' />
      </div>

      <div className='container__user--greetings'>
        <p>Hi Axel!</p>
        <p>Let's make an impact</p>
      </div>
    </div>
  )
}

export default TopBar