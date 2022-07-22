import React from 'react';
import Image from '../UI/image/Image';

const AboutCard = (card) => {
    return (
        <div className='grideCell' style={{minWidth: '250px'}}>
            <div className='containerCardImage'>
                <Image className={'cardImage'} src={card.CardImg} width={280} height ={280}/>
            </div>
            <div className='cardTitle'>
                <h4 className='h4Title'>{card.title}</h4>
            </div>
            <div className='cardBody'>
                <p className='cardText'>{card.description}</p>
            </div>
        </div>
);
}

export default AboutCard;