import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/UsersReducer";
import axios from 'axios';
import React from 'react';
import Users from "./Users";

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

    render() { return <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} 
                             totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} 
                             onPageChanged={this.onPageChanged} getUsers={this.getUsers}></Users> }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followActionCreator(userId))},
        unfollow: (userId) => {dispatch(unfollowActionCreator(userId))},
        setUsers: (users) => {dispatch(setUsersActionCreator(users))},
        setCurrentPage: (newPageNumber) => {dispatch(setCurrentPageActionCreator(newPageNumber))},
        setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountActionCreator(totalUsersCount))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);

export default UsersContainer;