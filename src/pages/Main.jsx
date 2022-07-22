import React from 'react';
import '../style/App.css';
import '../modal/modal.css';
import HeaderCount from '../components/HeaderCount';
import NavList from '../components/NavList';
import LowYouWorld from '../components/LowYouWorld';
import About from '../components/About';
import WorldForYou from '../components/WorldForYou';
import Clients from '../components/Clients';
import WeOnSocNetworks from '../components/WeOnSocNetworks';
import Footer from '../components/Footer';

function Main(props) {
    // const [isMain, setIsMain] = useState(true)
    return (
        <div className='main' id="main">  
            <HeaderCount/>
            <NavList isMain={true}/>
            <LowYouWorld/>
            <About/>
            <WorldForYou/>
            <Clients/>
            <WeOnSocNetworks/>
            <NavList isMain={true}/>
            <Footer/>
        </div>
    );
}

export default Main;