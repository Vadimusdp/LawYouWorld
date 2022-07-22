import React from 'react';
import Footer from '../components/Footer';
import HeaderCount from '../components/HeaderCount';
import NavList from '../components/NavList';
import Practices from '../components/Practices';

function OurServises(props) {
    return (
      <div className='ourServices' id="ourServices">
        <HeaderCount/>
        <NavList/>
        <Practices/>
        <NavList/>
        <Footer/>
        
      </div>  
    );
}

export default OurServises;