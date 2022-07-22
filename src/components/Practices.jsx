import React from 'react';
import Blog from '../blog/Blog';
import BlogsJson from '../API/Blogs';
import HeadingLine from '../UI/HeadingLine/HeadingLine';

function Practices(props) {
    const items = BlogsJson.map(blog => 
        <Blog 
            blog={blog}
        />
    )

    return (
        <div className='container'>
            <HeadingLine textHeading={'Практики'}/>
            {items}
            <h4 className='details'>Скоро – більше!</h4>
        </div>
    );
}

export default Practices;