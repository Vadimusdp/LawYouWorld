import React from 'react';
import blogImg from '../hooks/blogImg';

function createMarkup(content) { return {__html: content}; };
function createComponent(content) {
    
    return <div className='conteiner listPractices' dangerouslySetInnerHTML={createMarkup(content)} />;
  } 

function Block(props) {
    console.log(blogImg()[props.block.id-1]);
    const image = blogImg()[props.block.id-1]
    return (
            <div className='grideCell'>
                <div className='conteiner' style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '250px',
                    padding: '0 10%',
                    // width: '140px',
                    margin: '0 24px'
                    }}>
                </div>
                <div className='conteiner'>
                    <h4 className='headingListPractices' style={{textAlign: 'left'}}>{props.block.title}</h4>
                </div>
                <div>
                    {createComponent(props.block.body)}
                </div>
            </div>
    );
}

export default Block;