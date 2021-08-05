import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
    <div>
        <div>
            <img src='https://avatars.mds.yandex.net/get-autoru-vos/2160514/933d291eec9f540de49aaacb1d1ea721/1200x900n'></img>
        </div>
        <div className={styles.descriptionBlock}>
            ava + description
        </div>        
    </div>);
};

export default ProfileInfo;