import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It`s my first post', likesCount: 20},
        {id: 2, message: 'Array method MAP', likesCount: 10}         
    ];

    let postsElements = postsData.map( post => <Post id={post.id} message={post.message} likeCount={post.likesCount} /> );

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
            { postsElements }
        </div>
    </div>
    );
}

export default MyPosts;