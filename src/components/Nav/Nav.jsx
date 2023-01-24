import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage} from 'react-icons/ai'
import{RiServiceLine} from 'react-icons/ri'
function Nav() {
  const[activenav,setActivenav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActivenav('#')} className={activenav === '#'? 'active':''}><AiOutlineHome/></a>
      <a href='#about' className={activenav === '#about'? 'active':''} onClick={()=>setActivenav('#about')}><AiOutlineUser/></a>
      <a href='#experience' className={activenav === '#experience'? 'active':''} onClick={()=>setActivenav('#experience')}><AiOutlineBook/></a>
      <a href='#services' className={activenav === '#services'? 'active':''} onClick={()=>setActivenav('#services')}><RiServiceLine/></a>
      <a href='#contact' className={activenav === '#contact'? 'active':''} onClick={()=>setActivenav('#contact')}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav