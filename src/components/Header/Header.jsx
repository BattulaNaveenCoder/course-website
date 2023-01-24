import React from 'react'
import CTA from './CTA'
import './Header.css'
import Me from '../../assets/mee.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className='.container header__container'>
        <h5>Hello I'am</h5>
        <h1>Naveen</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
<img src={Me} alt='Naveen Img'></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div> 
    </header>
  )
}

export default Header