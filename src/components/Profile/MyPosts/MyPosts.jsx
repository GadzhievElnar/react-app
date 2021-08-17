import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = { type: 'ADD-POST' };
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    }

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;