import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import logo_1 from '../img/activated.jpg';
import logo_2 from '../img/mkb.jpg';
import logo_3 from '../img/km.jpg';
import logo_4 from '../img/BeFirst.jpg';
import logo_5 from '../img/AIESEC.jpg';
import logo_6 from '../img/uku.jpg';
import logo_7 from '../img/urv.jpg';
import logo_8 from '../img/srv.jpg';

import Image from '../UI/image/Image';

const handleDragStart = (e) => e.preventDefault();

const items = [
    
    <Image 
    src={logo_1}
    className={'carouselImg'}
    width={100}
    height={100}/>
    ,
    <a href='https://www.facebook.com/vin.youth.congress' target={'_blank'} rel="noreferrer">
        <Image 
        src={logo_2}
        className={'carouselImg'}
        width={100}
        height={100}/>
    </a>,
    <a href='https://www.facebook.com/kmrukraine' target={'_blank'} rel="noreferrer">
        <Image 
        src={logo_3}
        className={'carouselImg'}
        width={100}
        height={100}/>
    </a>,
    <a href='https://www.facebook.com/befirst.in.ua' target={'_blank'} rel="noreferrer">
        <Image
        src={logo_4}
        className={'carouselImg'}
        width={100}
        height={100}/>
    </a>,
    <a href='https://www.facebook.com/AIESECglobal' target={'_blank'} rel="noreferrer">
        <Image
        src={logo_5}
        className={'carouselImg'}
        width={100}
        height={100}/>
    </a>,
    <a href='https://www.facebook.com/politclub.ucu' target={'_blank'} rel="noreferrer">
        <Image
        src={logo_6}
        className={'carouselImg'}
        width={100}
        height={100}/>
    </a>,
    <a href='https://www.facebook.com/vinnytsiachildrencouncil' target={'_blank'} rel="noreferrer">
        <Image
        src={logo_7}
        className={'carouselImg'}
        width={100}
        height={100}/>
    </a>,
    <a href='https://www.facebook.com/vinstudent' target={'_blank'} rel="noreferrer">
        <Image
        src={logo_8}
        className={'carouselImg'}
        width={100}
        height={100}/>
    </a>
  ];

const responsive = {
    0:{
        items:2,
        nav:true
    },
    600:{
        items:4,
        nav:false
    },
    1000:{
        items:6,
        nav:true,
        loop:false
    }
};

const ClientCarousel = () => {
    return (
        <div className='elementWidget'>
            <AliceCarousel 
                autoPlay={true} 
                autoPlayInterval={2000}
                autoPlayStrategy={'all'} 
                disableDotsControls={true} 
                infinite={true}
                responsive={responsive}
                disableButtonsControls={true}
                // autoHeight={true} 
                mouseTracking 
                items={items}
                handleDragStart={handleDragStart} 
            />
        </div>
    )
}

export default ClientCarousel;