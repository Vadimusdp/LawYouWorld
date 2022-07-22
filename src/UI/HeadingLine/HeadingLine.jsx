import React from 'react';

const HeadingLine = ({textHeading, textClassName}) => {
    if(!textClassName) {
        textClassName = 'elementLine'; 
    }
    return (
        <div className='container'>
            <h2  className='sectionHeading'>
                {/* <div className='container'> */}
                    <span className={textClassName}>
                        {textHeading}
                    </span>
                {/* </div> */}
            </h2>
        </div>
    );
}

export default HeadingLine;