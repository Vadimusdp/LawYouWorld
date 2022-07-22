import React from 'react';
import { useState } from 'react';
import ModalEmailForm from '../modal/ModalEmailForm';
import Image from '../UI/image/Image';
import '../modal/floatingButton.css';
import iconFloatingButton from '../img/envelope-letter-mail.svg';
import ModalContact from '../modal/ModalContact';
import { Link } from 'react-router-dom';

function Footer(props) {
    const [modalActive, setModalActive] = useState(false)
    const [contactActive, setContactActive] = useState(false)
    return (
        <footer className='footer'>
            
            <div className='conteiner'>
                <div className='gride'>
                    <div className='grideCell'>
                        <div className='footerLeft'>
                            <p className='footerLeft'>Контакти:</p>
                            <p className='footerLeft'>phone: ......<a href='tel:+380632975991'> +380632975991</a></p>
                            <p className='footerLeft'>e-mail: ......<a href='mailto:i@lawyou.world'> i@lawyou.world</a></p>
                            <p className='footerLeft'>telegram: .<a href='https://telegram.me/MatviiMuts' target={'_blank'} rel="noreferrer">@MatviiMuts</a></p>
                        </div>
                    </div>
                    <div className='grideCell'>    
                        <div className='conteiner'>
                            <p className='footerText'>Law You World</p>
                            <div className='conteiner'>
                                <button className='FloatingButton' onClick={()=>{setModalActive(true)}}><Image src={iconFloatingButton} height={20} width={20} className={'iconFB'}/></button>
                            </div>
                        </div>
                    </div>
                    <div className='grideCell' style={{maxWidth: '100%'}}>
                        <p className='footerRight'>Copyright © 2022 Law You World - Усі права захищені.</p>
                        <p className='footerRight' style={{cursor: 'pointer'}}>
                            <Link style={{color: 'rgb(82, 82, 82)', textDecoration: 'none'}} to='/VadimusDP'>VadimusDP</Link> © 2022 
                            <a  style={{textDecoration: 'none'}} href='mailto:vadimusdp@gmail.com'>  &#64; |</a>
                            <a  style={{textDecoration: 'none'}} href='tel:+380673382609'> &#9990; |</a>
                            <a  style={{textDecoration: 'none'}} href='https://telegram.me/VadimusDP' target={'_blank'} rel="noreferrer"> &#10147;</a>
                        </p>
                    </div>
                </div>
            </div>
            <ModalEmailForm active={modalActive} setActive={setModalActive}/>
        </footer>
    );
}

export default Footer;