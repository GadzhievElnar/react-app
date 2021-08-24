import axios from 'axios';
import React from 'react';
import User from './User/User';

class UsersClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            debugger;
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => (this.props.setUsers(response.data.items)));
            debugger;
        }
    }

    render() {
        let usersElements = this.props.users.map(user => { return (<User user={user} follow={this.props.follow} unfollow={this.props.unfollow} />) });

        return (
            <div>
                <div><button onClick={this.getUsers}>GetUsers</button></div>
                {usersElements}
            </div>
        )
    }
}

export default UsersClassComponent;