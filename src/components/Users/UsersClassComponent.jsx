import axios from 'axios';
import React from 'react';
import User from './User/User';
import styles from './Users.module.css';

class UsersClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {          
            this.getUsers(this.props.currentPage);
        }
    }

    getUsers = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
        
    }

    onPageChanged = (pageNumber) => {
        this.getUsers(pageNumber); 
    }

    render() {
        debugger;
        let usersElements = this.props.users.map(user => { return (<User user={user} follow={this.props.follow} unfollow={this.props.unfollow} />) });
        let pages = [];

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : ''} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                <div><button onClick={this.getUsers}>GetUsers</button></div>
                {usersElements}
            </div>
        )
    }
}

export default UsersClassComponent;