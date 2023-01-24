import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/feed/' target="__blank"><BsLinkedin/></a>
        <a href='https://github.com/' target="__blank"><BsGithub/></a>
        <a href='https://www.facebook.com/' target="__blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials