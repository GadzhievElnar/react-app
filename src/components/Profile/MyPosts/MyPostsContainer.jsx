import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let updateNewPostText = (text) => {    
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return ( 
        <MyPosts updateNewPostText={updateNewPostText} 
                 addPost={addPost} 
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>     
    );
}

export default MyPostsContainer;