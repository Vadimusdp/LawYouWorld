import React from 'react';
import { Link } from 'react-router-dom';

const List = ({className, isMain}) => {
    
    return(
        <nav class="navBar">
        <ul class="navlist">    
            <Link to='/'><button className={isMain ? 'navlistItem bold' : 'navlistItem'}>ГОЛОВНА</button></Link>
            <Link to='/Servises'><button className={!isMain ? 'navlistItem bold' : 'navlistItem'}>ПОСЛУГИ</button></Link>
        </ul>
        </nav>    
    );
}

export default List;