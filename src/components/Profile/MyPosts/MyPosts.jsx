import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
debugger;
    let postsElements = props.profilePage.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    debugger;

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                        value={props.profilePage.newPostText}
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