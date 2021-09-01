import React from 'react';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../resources/images/default_ava.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    debugger;
    
    //if(props.profile == null || props.profile == undefined)
    if (!props.profile)
    {
        return <div></div>
    }
    
    return(
        
    <div>
        <div>
            <img alt='img' src={props.profile.photos.large ? props.profile.photos.large : userPhoto} className={styles.avaImg}/>
        </div>
        <ProfileStatus status='Hello my friends'/>
        <div className={styles.descriptionBlock}>
            <div>
                About me: {props.profile.aboutMe}
            </div>            
        </div>        
    </div>);
};

export default ProfileInfo;