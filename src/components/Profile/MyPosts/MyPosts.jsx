import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
    <div>
        My posts
        <div>
            New post
        </div>
        <div className={styles.posts}>
            <Post></Post>
            <Post></Post>
        </div>
    </div>
    );
}

export default MyPosts;