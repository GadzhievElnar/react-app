import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                 
                    let state = store.getState();

                    let addPost = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    }
                
                    let updateNewPostText = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return (
                        <MyPosts updateNewPostText={updateNewPostText}
                            addPost={addPost}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText} />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;