import React from 'react';
import { Redirect } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    console.log("Profile()");
    console.log(props);
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatusThunkCreator}/>
            <MyPostsContainer sdad={props.asd}/>
        </div>

    );
}

export default Profile;