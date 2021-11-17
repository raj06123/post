import React from 'react';
import './Post.css'

const Post = ({
    event_date,
    thumbnail_image,
    likes,
    views
}) => {
    return (
        <div className="images">
            <img className="post" src  = {thumbnail_image}/> 
            <div className="date">Date: {new Date(event_date).toString()}</div>
           <button className="btn1"><div  className="like" >Likes: {likes}</div></button>
            <button className="btn2"><div className="views">Views: {views}</div></button>
        </div>
    )
}

export default Post;
