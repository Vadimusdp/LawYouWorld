import React from 'react';
import Aside from '../components/rezume/Aside';
import MainContent from '../components/rezume/MainContent';
import '../components/rezume/Styles.css';
const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ? true : false
function VadimusDP(props) {
    // const isMobile = window.screen.width < 1200

    return (
        <div>
            <h1 className='title' style={{textAlign: 'center'}}>Front-End developer</h1>
            <h1 class="title" id="about_name" style={{textAlign: 'center'}}>Donetskyy Vadim</h1>

            <div class={isMobile ? "mainMobile" : "mainR"} id="main">
                <Aside/>
                <MainContent/>
            </div>
            {/* <p className='footerText'><a href='mailto:vadimusdp@gmail.com'> &#64; email: vadimusdp@gmail.com</a></p>
            <p className='footerText'><a href='tel:+380673382609'> &#9990; tel: +380673382609</a></p>
            <p className='footerText'><a href='https://telegram.me/VadimusDP' target={'_blank'} rel="noreferrer"> &#10147; telegram: @VadimusDP</a></p>         */}
        </div>
    );
}

export default VadimusDP;