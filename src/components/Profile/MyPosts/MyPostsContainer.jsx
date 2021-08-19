import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import StoreContext from '../../../StoreContext_';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;