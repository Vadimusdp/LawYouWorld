import React from 'react';
import Image from '../UI/image/Image';
import NavList from './NavList';
import logo from '../img/LYW5-01.png';

const HeaderCount = () => {
    return (
        <header className='header' id='header'>
            <div class="navBar">
                <Image 
                    src={logo}
                    className={'logo'}
                    width={'auto'}
                    height={170}
                />
            </div>
        </header>
    );
}

export default HeaderCount;