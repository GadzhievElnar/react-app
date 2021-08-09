import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post id={post.id} message={post.message} likeCount={post.likesCount} /> );
    
    let newPostElement = React.createRef();

    let addPost = () => { 
        let text = newPostElement.current.value;
        alert(text);}

    return(
    <div className={styles.postsBlock}>
        My posts
        <div>
            <div>
                <textarea ref={newPostElement}>New Post Text</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>            
        </div>
        <div className={styles.posts}>
            { postsElements }
        </div>
    </div>
    );
}

export default MyPosts;