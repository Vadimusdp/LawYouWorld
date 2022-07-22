import React from "react";
import { Link } from "react-router-dom";
import Image from "../UI/image/Image";

const PostItem = (props) => {
  const id = props.post.id
  const namePage = '/Post'+id
  // const [activePost, setActivePost] = useState(false)
  return (
    <div className='conteiner post' id={id}>
      <Link to={namePage} className="conteiner post" postid={id}>
        <div className="divPostImg" style={{
          backgroundImage: "url(" + props.PostImg + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '180px',
          padding: '0 10%',
          // maxwidth: '140px',
          margin: '0 24px'
        }}>
          {/* <Image
            src={props.PostImg}
            className={'postImg conteiner'}
            width={243}
            height={140}
          /> */}
        </div>
        <div className="conteiner postContent"><p>{props.post.date}</p></div>
        <div className="conteiner postContent" style={{marginLeft: '24px', marginRight: '24px'}}><h4>{props.post.title}</h4></div>
        <div className="conteiner postContent">Читати</div>
        </Link>
        {/* <hr/> */}
    </div>
  )
}

export default PostItem;