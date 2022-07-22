import React from 'react';
import Block from './Block';

function Blog(props) {
    const items = props.blog.content.map(block => 
        <Block 
            block={block}
        />
    )
    return (
        <div>
            <div className='block'>
                <div className='conteiner'>
                    <h1 className='headingWidget'>{props.blog.title}</h1>
                    <h4 className='details'>{props.blog.details}</h4>
                    <div className='gride'>
                        {items}
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default Blog;