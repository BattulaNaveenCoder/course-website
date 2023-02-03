import React from 'react'
import './Experiance.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experiance() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h2>Frontend Development</h2>
            <div className='experience__content'>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>JAVASCRIPT</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>BOOTSTRAP</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>TAILWIND</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>REACT</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
            </div>
        </div>
        <div className='experience__backend'>        
          <h2>Backend Development</h2>
          <div className='experience__content'>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div >
                    <h4>C#</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>WEB API</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                   
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>MS SQL</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>LINQ</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>XAMARIN</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                <article className='experience-details'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                    <h4>XAMAL</h4>
                    <small className='text-light'>Experienced</small>
                    </div>                    
                </article>
                </div>            
        </div>

      </div>
    </section>
  )
}

export default Experiance