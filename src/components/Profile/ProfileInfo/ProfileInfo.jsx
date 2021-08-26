import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    //if(props.profile == null || props.profile == undefined)
    if (!props.profile)
    {
        return <div></div>
    }

    return(
    <div>
        <div>
            <img src={props.profile.photos.large}></img>
        </div>
        <div className={styles.descriptionBlock}>
            <div>
                About me: {props.profile.aboutMe}
            </div>            
        </div>        
    </div>);
};

export default ProfileInfo;