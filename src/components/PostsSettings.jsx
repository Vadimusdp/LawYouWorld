import React from 'react';
import posts from '../API/Posts.json';
import { getArrayImg } from '../hooks/postImg';
import PostSettings from './PostSettings';

// function savePostFile(jsonContent) {
//     writeFile('../API/Posts.json', jsonContent, 'utf8', callback);
// }


function PostsSettings(props) {
    
    
    const arrayImg = getArrayImg()
    
    const items = posts.map(post => 
        <PostSettings 
            post={post}
            PostImg={arrayImg[post.id-1]}
        />
    )
    const emptyPost = {id: items.length+1, date: '', title: '', body: ''}
    // console.log(items.length+1);
    return (
        <div>
            {items}
            <PostSettings 
                post={emptyPost}
                PostImg={arrayImg[emptyPost.id-1]}
            />
            <hr/>
            <hr/>
        </div>
    );
}

export default PostsSettings;