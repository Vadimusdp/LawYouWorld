// import React from 'react';
// import fs from 'fs';
import postsJSON from '../API/Posts.json';
// const postsJSON = reqire('../API/Posts.json')

const newArrey = []

export default function savePost(cPost) {
    // const newArrey = posts
    // for (let post of postsJSON) {
    if (!cPost.title == "") {
            newArrey.push(cPost)
        } 
    // else {
    //         newArrey.push(post)
    //     }
    // }


    // if (postsJSON.length < cPost.id) {
    //     newArrey.push(cPost)
    // }

    console.log(newArrey);
    
    // return (
    //     <div>
    //        agadg 
    //     </div>
    // );
}

// export default savePost;