import React from "react";
import styleProfile from './Post.module.css';

const Post = () => {
    return (
        <div className={styleProfile.item}>
            <img src="x" alt="Avatar  " />
            post 1
            <span>Like</span>
            <input type='text' />
        </div>

    )
}

export default Post;