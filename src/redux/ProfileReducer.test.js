import ProfileReducer, { addPostActionCreator, deletePostActionCreator } from "./ProfileReducer";
import React from "react";

let state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It`s my first post', likesCount: 20 },
      { id: 2, message: 'Array method MAP', likesCount: 10 }
    ],
    profile: null,
    status: ''
  }

test('Count posts after adding a new one is correct', () => {
    //1.Test Data
    let action = addPostActionCreator('new post')

    // 2. Action
    let newState = ProfileReducer(state, action);

    //3. Expection result
    expect(newState.posts.length).toBe(4);
  });
  

  test('message in newpost is correct', () => {
    //1.Test Data 

    let action = addPostActionCreator('new post')

    // 2. Action
    let newState = ProfileReducer(state, action);

    //3. Expection result
    expect(newState.posts[3].message).toBe('new post');
  });

  test('length posts after delete', () => {
    //1.Test Data 

    let action = deletePostActionCreator(1);

    // 2. Action
    let newState = ProfileReducer(state, action);

    //3. Expection result
    expect(newState.posts.length).toBe(2);
  });


  test('length posts after delete passed the wrong ID', () => {
    //1.Test Data 

    let action = deletePostActionCreator(777);

    // 2. Action
    let newState = ProfileReducer(state, action);

    //3. Expection result
    expect(newState.posts.length).toBe(3);
  });