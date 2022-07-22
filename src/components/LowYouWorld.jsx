import React from 'react';
import BloсkGreeting from './BloсkGreeting';
import BlockNeedHalp from './BlockNeedHalp';
import BackVideo from '..//gif/Back36f8f3c01de2c9f6f713.mp4'; 

const LowYouWorld = (...props) => {
    return (
        <div className='elLowYouWorldImg'>
            
            <video autoPlay loop muted
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                }}>
                <source src={BackVideo} />
            </video>
            <div className='gride'>
                <BloсkGreeting/>      
            </div>
            {/* <div className='block'>
                <BlockNeedHalp/>
            </div> */}
        </div>
    );
}

export default LowYouWorld;