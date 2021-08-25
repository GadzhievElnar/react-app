import React from 'react';
import User from './User/User';
import styles from './Users.module.css';

const Users = (props) => {
    debugger;
    let usersElements = props.users.map(user => { return (<User user={user} follow={props.follow} unfollow={props.unfollow} />) });
    let pages = [];

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            <div><button onClick={props.getUsers}>GetUsers</button></div>
            {usersElements}
        </div>
    );
}

export default Users;