import React, { Fragment } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Experiance from './components/Experiance/Experiance';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <About/>
      <Experiance/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      
      
    </Fragment>
  );
}

export default App;
