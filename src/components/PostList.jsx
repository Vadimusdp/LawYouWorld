import React from 'react';

const PostList = ({posts, remove}) => {
    if (!posts.length) {
        return(<h1 style={{textAlign:'center'}}>Дописи відсутні. Слідкуйте за новинами</h1>)
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{date}</h1>
            <h1 style={{textAlign:'center'}}>{title}</h1>

        </div>
    );
}

export default PostList;