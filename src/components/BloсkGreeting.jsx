import React from 'react';

const BloсkGreeting = (props) => {
    return (
        <div className='conteiner'>
            <div className='greeting'>
                <h1 className='greeting' style={{backgroundColor: 'transparent', marginTop: '30%', paddingTop: '18px', lineHeight: '1.5'}}>Law You World</h1>
                <h1 className='greeting' style={{backgroundColor: 'transparent', paddingBottom: '18px', lineHeight: '1.5'}}> вітає тебе!</h1>
            </div>    
        </div>
    );
}

export default BloсkGreeting;