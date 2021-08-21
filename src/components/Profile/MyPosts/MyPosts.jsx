import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likesCount} />);

    let onPostChange = (event) => {
        let text = event.target.value;     
        props.updateNewPostText(text);
    }


    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={props.addPost}>Add Post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;