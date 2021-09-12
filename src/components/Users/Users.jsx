import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import styles from './Users.module.css';

const Users = (props) => {
    let usersElements = props.users.map(user => { return (<User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress} />) });

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged} />

            <div><button onClick={props.getUsers}>GetUsers</button></div>
            {usersElements}
        </div>
    );
}

export default Users;