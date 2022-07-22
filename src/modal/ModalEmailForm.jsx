import React from 'react';
import HeadingLine from '../UI/HeadingLine/HeadingLine';
import HourTable from '../UI/table/HourTable';
import Image from '../UI/image/Image';
import locationImg_1 from '../img/Location_1.jpg';
import './modal.css';

const ModalEmailForm = ({active, setActive}) => {
  return (
    <div className={active ?'modal active' : 'modal'} onClick={() => setActive(false)} style={{zIndex: '1'}}>
      <div className='modal-content'>
        <HeadingLine textHeading={'Зв’язатися з нами'}/>
        <div>
            <div className='gride' onClick={e=>e.stopPropagation()}>
            <div className='grideCell' style={{padding: '5px'}}>
              <form className='form'>
                <div className='block'>
                  <h4 className='headingEmeil'>Контакти:</h4>
                  <p className='footerLeft'>phone: ......<a href='tel:+380632975991'> +380632975991</a></p>
                  <p className='footerLeft'>e-mail: ......<a href='mailto:i@lawyou.world'> i@lawyou.world</a></p>
                  <p className='footerLeft'>telegram: .<a href='https://telegram.me/MatviiMuts' target={'_blank'} rel="noreferrer">@MatviiMuts</a></p>
                </div>
                <div className='block'>
                  <h4 className='headingEmeil'>А ще краще — зустрінься з нами особисто!</h4>
                  <p className='contentText'>Ми турбуємся про наших клієнтів, тож, не вагаючись, відвідай нас у звичайний робочий час.</p>
                </div>
              </form>
            </div>
            <div className='grideCell'>
              <div className='block'>
                <div className='block'>
                </div>
                <div className='block'>
                  <h4 className='headingEmeil'>Law You World</h4>
                  <p className='contentText'>м. Вінниця, вул. Визволення, 8, оф. 37 </p>
                </div>
              </div>
              <a href='https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%92%D0%B8%D0%B7%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F,+8,+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F,+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+21000/@49.233926,28.4760113,17.5z/data=!4m13!1m7!3m6!1s0x472d5b657b912fe3:0xeecb1dcd176cdfb6!2z0LLRg9C70LjRhtGPINCS0LjQt9Cy0L7Qu9C10L3QvdGPLCDQktGW0L3QvdC40YbRjywg0JLRltC90L3QuNGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAyMTAwMA!3b1!8m2!3d49.2343389!4d28.4759001!3m4!1s0x472d5b657a71a4b1:0x10f22edbf84594dc!8m2!3d49.2345324!4d28.4755688?hl=uk' target={'_blank'}>
                <Image 
                    src={locationImg_1}
                    className={'location'}
                    width={'auto'}
                    height={'auto'}
                />
              </a>              
            </div>
            <div className='grideCell'>
              <div className='block'>
                <HourTable/>              
              </div>
            </div>  

          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEmailForm;