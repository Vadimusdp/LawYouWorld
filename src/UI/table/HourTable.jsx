import React from 'react';
import { useState } from 'react';

const HourTable = (props) => {
    const [visibilityTable, setVisibilityTable] = useState(false)
    const today = new Date().getDay()
    return (
        <div className='block'>
        <div className='block'>
          <h4 className='headingEmeil'>Години: </h4>
          <p><strong className='contactHourse' onClick={()=>setVisibilityTable(!visibilityTable)}>
            Сьогодні {today >= 6 ? 'зачинено' : 'відчинено 9:00 - 17:00'}  &#709;</strong></p>
        </div>
        <div className='blockTable'>
          <div className='block blockTable'>
            <table className={visibilityTable ? 'table' : 'table notVisibility'} onClick={()=>setVisibilityTable(!visibilityTable)} style={visibilityTable ? {backgroundColor: '#FFF'} : {backgroundColor: 'transparent'}}>
              <tr className='contactHourse'>
                <td>
                  <p className={today===1 ? 'contentText tableText bold' : 'contentText tableText'}>Пн</p>
                </td>
                <td>
                  <p className={today===1 ? 'contentText tableText bold' : 'contentText tableText'}>9:00 - 17:00</p>
                </td>
                <td>
                  <p className='contentText tableText' onClick={()=>setVisibilityTable(false)}><strong>&#708;</strong></p>
                </td>
              </tr>
              <tr className='contactHourse'>
                <td>
                  <p className={today===2 ? 'contentText tableText bold' : 'contentText tableText'}>Вт</p>
                </td>
                <td>
                  <p className={today===2 ? 'contentText tableText bold' : 'contentText tableText'}>9:00 - 17:00</p>
                </td>
              </tr>
              <tr className='contactHourse'>
                <td>
                  <p className={today===3 ? 'contentText tableText bold' : 'contentText tableText'}>Ср</p>
                </td>
                <td>
                  <p className={today===3 ? 'contentText tableText bold' : 'contentText tableText'}>9:00 - 17:00</p>
                </td>
              </tr>
              <tr className='contactHourse'>
                <td>
                  <p className={today===4 ? 'contentText tableText bold' : 'contentText tableText'}>Чт</p>
                </td>
                <td>
                  <p className={today===4 ? 'contentText tableText bold' : 'contentText tableText'}>9:00 - 17:00</p>
                </td>
              </tr>
              <tr className='contactHourse'>
                <td>
                  <p className={today===5 ? 'contentText tableText bold' : 'contentText tableText'}>Пт</p>
                </td>
                <td>
                  <p className={today===5 ? 'contentText tableText bold' : 'contentText tableText'}>9:00 - 17:00</p>
                </td>
              </tr>
              <tr className='contactHourse'>
                <td>
                  <p className={today===6 ? 'contentText tableText bold' : 'contentText tableText'}>Сб</p>
                </td>
                <td>
                  <p className={today===6 ? 'contentText tableText bold' : 'contentText tableText'}>Зачинено</p>
                </td>
              </tr>
              <tr className='contactHourse'>
                <td>
                  <p className={today===7 ? 'contentText tableText bold' : 'contentText tableText'}>Нд</p>
                </td>
                <td>
                  <p className={today===7 ? 'contentText tableText bold' : 'contentText tableText'}>Зачинено</p>
                </td>
              </tr>
            </table>

          </div>
        </div>
      </div>
);
}

export default HourTable;