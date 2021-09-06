import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requeredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="enter new post text!" name="newPostText" component={Textarea} validate={[requeredField, maxLength10]} 
                />            
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
}

const NewPostReduxFrom = reduxForm({form: 'newPost'})(NewPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likesCount} />);

    let onSubmit = (formData) => {  
        props.addPost(formData.newPostText);
    }


    return (
        <div className={styles.postsBlock}>
            My posts

            <NewPostReduxFrom onSubmit={onSubmit}/>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;