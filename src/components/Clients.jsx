import React from 'react';
import ClientCarousel from './ClientCarousel';

const Clients = (props) => {
    return (
        <div className='widget'>
            <section className='section'>
                <div className='conteiner'>
                    <div className='group'>
                        <h3 className='headingWidget'>
                            Наші клієнти
                        </h3>
                        <ClientCarousel/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Clients;