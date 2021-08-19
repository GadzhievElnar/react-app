import React from 'react';
import StoreContext from '../../StoreContext';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>

    );
}

export default Profile;