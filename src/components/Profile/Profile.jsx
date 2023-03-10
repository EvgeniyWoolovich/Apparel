import React from "react";
import styleProfile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={styleProfile.content}>
            <div>
                <img src='https://saildarwin.com.au/wp-content/uploads/2013/12/Milky-way-1200x400.jpg' />
            </div>
            <div>
                ava + descripton
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;