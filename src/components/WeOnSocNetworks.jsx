import React from 'react';
import HeadingLine from '../UI/HeadingLine/HeadingLine';
import IconFacebook from '../img/facebook-button-light.svg';
import IconTwitter from '../img/twitter-button-light.svg';
import Image from '../UI/image/Image';

const WeOnSocNetworks = (props) => {
    
    
    return (
        <div className='weOnSocNetworks'>
            <div className='conteiner'>
                <HeadingLine textHeading={'Ми у соц. мережах'} textClassName='weOnSocNetworksLine'/>
            </div>
            <div className='gride'>
                <a href='https://www.facebook.com/LawYouWorld' target={'_blank'} rel="noreferrer" className='conteiner'>
                    <Image src={IconFacebook} height={20} width={20} className={'iconFB'}/>
                </a>
                {/* <a href='https://www.facebook.com/LawYouWorld' target={'_blank'} rel="noreferrer" className='conteiner'>
                    <Image src={IconTwitter} height={20} width={20} className={'iconFB'}/>
                </a>
                <a href='https://www.facebook.com/LawYouWorld' target={'_blank'} rel="noreferrer" className='conteiner'>
                    <Image src={IconFacebook} height={20} width={20} className={'iconFB'}/>
                </a> */}

            </div>
            
        </div>
    );
}

export default WeOnSocNetworks;