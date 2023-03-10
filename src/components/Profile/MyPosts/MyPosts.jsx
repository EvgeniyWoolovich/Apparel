import React from "react";
import styleProfile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Sheeet
            <div>
                New Sheet
            </div>
            <div className="posts">
                <div className={styleProfile.item}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default MyPosts;