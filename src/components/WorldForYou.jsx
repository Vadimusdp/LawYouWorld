import React from 'react';
import posts from '../API/Posts.json'
import PostItem from './PostItem';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from 'react';
import { getArrayImg } from '../hooks/postImg';

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0:{
        items:1,
        nav:true
    },
    700:{
        items:2,
        nav:false
    },
    1000:{
        items:3,
        nav:true,
        loop:false
    },
    1300:{
        items:4,
        nav:true,
        loop:false
    },
    1600:{
        items:5,
        nav:true,
        loop:false
    }
};

const arrayImg = getArrayImg()

function WorldForYou(props) {
    const [onlyNew, setOnlyNew] = useState(false)
    
    const items = posts.filter(p=>p.news >= onlyNew).map(post => 
        <PostItem 
            post={post}
            PostImg={arrayImg[post.id-1]}
            />
    )
    // const [modalPost, setModalPost] = useState(true)
    return (
        <div className='worldForYou'>
            <section className='block'>
                <div className='container'>
                    <h2 className='heading'>
                        Світ для Тебе!
                    </h2>
                </div>
                <nav class="navBar">
                    <ul class="navlist">    
                        <button className={!onlyNew ? 'navlistItem navlistItemPost bold' : 'navlistItem navlistItemPost'} onClick={()=>setOnlyNew(false)}>УСІ ДОПИСИ</button>
                        <button className={onlyNew ? 'navlistItem navlistItemPost bold' : 'navlistItem navlistItemPost'} onClick={()=>setOnlyNew(true)}>НОВИНИ</button>
                    </ul>
                </nav>    

                <div className='conteiner' style={{backgroundColor: 'rgb(47, 65, 97, 0.5)', paddingTop: '18px'} }>
                    <div className='conteynerPost' style={{padding: '0 10%'}}>
                        <AliceCarousel 
                            items={items}
                            mouseTracking 
                            responsive={responsive}
                            disableButtonsControls={true}
                            handleDragStart={handleDragStart}
                        />
                    </div>
                </div>    
            </section> 
        </div>
    );
}

export default WorldForYou;