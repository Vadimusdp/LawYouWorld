import React from 'react';
import BlogsSettings from '../components/BlogsSettings';
import PostsSettings from '../components/PostsSettings';


function Settings(props) {
    return (
        <div>
           <PostsSettings/>
           <BlogsSettings/>
        </div>
    );
}

export default Settings;