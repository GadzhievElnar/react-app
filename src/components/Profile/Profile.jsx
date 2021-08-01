import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src='https://avatars.mds.yandex.net/get-autoru-vos/2160514/933d291eec9f540de49aaacb1d1ea721/1200x900n'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts></MyPosts>
        </div>
    );
}

export default Profile;