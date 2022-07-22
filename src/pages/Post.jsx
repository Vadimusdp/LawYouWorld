import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import posts from '../API/Posts.json';
import Image from '../UI/image/Image';
import 'react-alice-carousel/lib/alice-carousel.css';
import NavList from '../components/NavList';
import Footer from '../components/Footer';
import HeaderCount from '../components/HeaderCount';
import LowYouWorld from '../components/LowYouWorld';
import About from '../components/About';
import Clients from '../components/Clients';
import PostItem from '../components/PostItem';
import { getArrayImg } from '../hooks/postImg';

const arrayImg = getArrayImg()

function createMarkup(content) { return {__html: content}; };
function createComponent(content) {
    return <div dangerouslySetInnerHTML={createMarkup(content)} />;
  } 

function Post(props) {
    const [onlyNew, setOnlyNew] = useState(false)
    const {id} = useParams()
    const mainItem = posts.filter(p=>p.id == id).map(post => 
        <div className='grideCell' style={{minWidth: '70%',maxWidth: '33%'}}>
            <Link to='/'><h4 className='details' style={{textAlign: 'left', marginTop: '24px'}}>&#10092;&#10092;&#10092; УСІ ДОПИСИ</h4></Link>
            <div className='conteiner postContent'><h4 className='headingWidget' style={{textAlign: 'left', marginTop: '0'}}>{post.title}</h4></div>
            <div className='conteiner postContent'><p className='details' style={{textAlign: 'left'}}>{post.date}{post.news ? '  |  Новини' : ''}</p></div>
            <div  className='blogContent'>
                <p><figure className='blogFigure'>
                    <Image
                        src={arrayImg[id-1]}
                        className={'framePostImg'}
                        width={243}
                        height={140}
                    />
                </figure></p>
                <div className='listPractices'>{createComponent(post.body)}</div>
            </div>
        </div>
)
    const items = posts.filter(p=>p.news >= onlyNew).filter(p=>p.id != id).map(post => 
        <PostItem 
            post={post}
            PostImg={arrayImg[post.id-1]}
        />
)
    return (
        <div className='main'>
            <HeaderCount/>
            <NavList isMain={true}/>
            <LowYouWorld/>
            <About/>
            <div className='conteinerPost'>
                <div className='conteiner' style={{paddingTop: '5px'}}>
                    <h2 className='heading'>СВІТ ДЛЯ ТЕБЕ</h2>
                </div>
                <div className='conteiner' 
                    style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        // maxWidth: '1160px',
                        padding: 0,
                        margin: '24px',
                    }}>
                    <div className='gride'>            
                        {mainItem}
                        <div className='grideCell'  style={{backgroundColor: 'rgb(47, 65, 97, 0.7)', padding: '0 10px', maxWidth: '25%', minWidth: '25%'}}>
                            <h4 className='headingWidget' style={{color: '#ebaa40'}}>Категорії</h4>
                            <ul class="navlist">    
                                <h4 className={!onlyNew ? 'conteiner postContent bold' : 'conteiner postContent'} style={{cursor: 'pointer', color: 'white'}} onClick={()=>setOnlyNew(false)}>УСІ ДОПИСИ</h4>
                                <h4 className={onlyNew ? 'conteiner postContent bold' : 'conteiner postContent'} style={{cursor: 'pointer', color: 'white'}} onClick={()=>setOnlyNew(true)}>НОВИНИ</h4>
                            </ul>
                            <div>
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Clients/>
            <NavList isMain={true}/>
            <Footer/>
        </div>
    );
}

export default Post;