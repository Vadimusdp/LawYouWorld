import React from 'react';
import './modal.css';

const ModalContact = ({active, setActive}) => {
  return (
    <div className={active ? 'contact modal active' : 'contact modal'} onClick={() => setActive(false)} style={{zIndex: '1'}}>
      <div className='modal-content' onClick={e=>e.stopPropagation()}>
        {/* <div>
            <div className='gride'>
            <div className='grideCell' style={{padding: '5px'}}>
              <form className='form'> */}
                <div className='block'>
                  <h4 className='headingEmeil'>Розробка сайтів</h4>
                  <p className='footerLeft'>phone: ......<a href='tel:+380673382609'> +380673382609</a></p>
                  <p className='footerLeft'>e-mail: ......<a href='mailto:vadimusdp@gmail.com'>VadimusDP@gmail.com</a></p>
                  <p className='footerLeft'>telegram: .<a href='https://telegram.me/VadimusDP' target={'_blank'} rel="noreferrer">@VadimusDP</a></p>
                </div>
              {/* </form>
              </div>
            </div>  

          </div> */}
        </div>
      </div>
  );
}

export default ModalContact;