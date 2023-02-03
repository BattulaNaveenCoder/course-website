import React from 'react'
import Me from '../../assets/me-about.jpg' 
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='my Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Happy Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>                      
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum  Fusce sit amet enim id ex finibus aliquam. Donec ut vestibulum orci. Maecenas ultrices rutrum enim, non maximus augue aliquam sed. Proin euismod ut ligula at rhoncus. Praesent eget dui tempor libero volutpat tempus. Proin condimentum sem eleifend fermentum vulputate. Suspendisse efficitur arcu ipsum, vel vulputate sem scelerisque eu. Suspendisse eget magna a lorem eleifend tempus. Etiam a augue justo. Morbi imperdiet porta finibus.
            </p> 
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About