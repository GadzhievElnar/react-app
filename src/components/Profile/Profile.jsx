import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    let state = props.store.getState().profilePage;
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts profilePage={state} dispatch={props.store.dispatch.bind(props.store)}/>
        </div>
    );
}

export default Profile;