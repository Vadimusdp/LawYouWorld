import ModalEmailForm from "../modal/ModalEmailForm";
import React, { useState } from 'react';

const BlockNeedHalp = (props) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className='blockNeedHalp'>
            <div className='needHalp'>
                <button className='needHalp' onClick={()=>{setModalActive(true)}}>потрібна юридична допомога?</button>
            </div>
            <ModalEmailForm active={modalActive} setActive={setModalActive}/>
        </div>
    );
}

export default BlockNeedHalp;