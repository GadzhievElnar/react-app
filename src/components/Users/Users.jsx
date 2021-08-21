import React from 'react';
import User from './User/User';

const Users = (props) => {
     let usersElements = props.users.map(user => { return(<User user={user} follow={props.follow} unfollow={props.unfollow}/>)});
    //let usersElements = props.users.map(user => { return(<div>{user.followed ? <span>followed</span> : <span>unfollowed</span>}</div>)});

    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users;