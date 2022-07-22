import React from 'react';
import HeadingLine from '../UI/HeadingLine/HeadingLine';
import AboutCard from './AboutCard';
import CardImg_1 from '../img/Aboutimg.jpg';
import CardImg_2 from '../img/EnergyImg.jpg';
import CardImg_3 from '../img/StepAheadImg.jpg';
import BlockNeedHalp from './BlockNeedHalp';

const About = () => {
    return (
        <div className='container'>
            <div className='conteiner' style={{marginTop:'24px'}}>
                <BlockNeedHalp/>
            </div>

            <HeadingLine textHeading={'Про нас'}/>
            <div className='contentCard'>
                <AboutCard 
                    CardImg={CardImg_1} 
                    title={'Law You World'} 
                    description={'Ми - дружня команда професіоналів, що зможе вирішити Твої юридичні питання'}/>
                <AboutCard 
                    CardImg={CardImg_2} 
                    title={'Енергія та натхнення'} 
                    description={'Youth for youth! Молода команда чітко розуміє сучасні тенденції глобалізованого світу. Читай наш блог!'}/>
                <AboutCard 
                    CardImg={CardImg_3} 
                    title={'На крок попереду'} 
                    description={'Професіоналізм і стратегічне планування стане надійним помічником для Твого зростання і запорукою результативної співпраці.'}/>
            </div>
        </div>
    );
}

export default About;