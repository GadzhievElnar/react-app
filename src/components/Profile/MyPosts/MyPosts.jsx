import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It`s my first post', likesCount: 20}        
    ];

    return(
    <div className={styles.postsBlock}>
        My posts
        <div>
            <div>
                <textarea>New Post Text</textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>            
        </div>
        <div className={styles.posts}>
            <Post id={postsData[0].id} message={postsData[0].message} likeCount={postsData[0].likesCount} />
            <Post id={postsData[1].id} message={postsData[1].message} likeCount={postsData[1].likesCount} />
        </div>
    </div>
    );
}

export default MyPosts;