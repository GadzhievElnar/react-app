import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://avatars.mds.yandex.net/get-autoru-vos/2160514/933d291eec9f540de49aaacb1d1ea721/1200x900n'></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post1
                    </div>

                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;