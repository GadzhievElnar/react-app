import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/ProfileReducer';
import StoreContext from '../../../StoreContext_';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {dispatch(addPostActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;