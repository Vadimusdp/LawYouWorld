import React, { useState } from 'react';
import MyInput from '../UI/Input/MyInput';
import MyTextArea from '../UI/Input/MyTextArea';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Image from '../UI/image/Image';
import DisplayImage from '../hooks/DispleyImage';

function PostSettings(props) {
    const [item, setPost] = useState({id: 'post_'+props.post.id, date: props.post.date, title: props.post.title, body: props.post.body})
    
    return (
        <div id={item.id} style={{display: 'inline-flex', width: '100%'}}>
            <div style={{width: '340px'}}>
                <Image
                    src={props.PostImg}
                    // className={'postImg conteiner'}
                />
                <DisplayImage/>
            </div>
            <div style={{width: '100%'}}>
            <form style={{width: '100%'}}><h1>{item.id}</h1>
                <label style={{width: '100%'}}>
                    <MyInput
                        value={item.date}
                        onChange={e => setPost({...item, date: e.target.value})} 
                        type='text' 
                        placeholder='Date'
                        title='Date'
                        id={'date_'+item.id}/>
                    <MyInput
                        value={item.title}
                        onChange={e => setPost({...item, title: e.target.value})} 
                        type='text' 
                        placeholder='Title'
                        title='Title'
                        id={'title_'+item.id}/>
                    <MyTextArea
                        value={item.body}
                        onChange={e => setPost({...item, body: e.target.value})} 
                        type='text' 
                        placeholder='body'
                        title='Body'
                        id={'body_'+item.id}/>
                </label>
            </form>
            <hr/>
            </div>
           
        </div>
    );
}

export default PostSettings;