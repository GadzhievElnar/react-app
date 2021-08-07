import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It`s my first post', likesCount: 20},
        {id: 2, message: 'Array method MAP', likesCount: 10}         
    ];

    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts posts={postsData}/>
        </div>
    );
}

export default Profile;