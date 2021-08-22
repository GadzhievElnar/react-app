import axios from 'axios';
import React from 'react';
import User from './User/User';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            debugger;
            axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => (props.setUsers(response.data.items)));
            debugger;
        }
    }


    let usersElements = props.users.map(user => { return (<User user={user} follow={props.follow} unfollow={props.unfollow} />) });

    return (
        <div>
            <div><button onClick={getUsers}>GetUsers</button></div>
            {usersElements}
        </div>
    )
}

export default Users;