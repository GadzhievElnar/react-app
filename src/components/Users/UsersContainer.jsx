import { connect } from "react-redux";
import { follow, setCurrentPage, setToogleIsFetching, 
    setTotalUsersCount, setUsers, unfollow, setToogleIsFollowingInProgress } from "../../redux/UsersReducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../API/api";

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
        this.props.setToogleIsFetching(true);
        
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {              
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setToogleIsFetching(false);
            });
        
    }

    onPageChanged = (pageNumber) => {
        this.getUsers(pageNumber);
    }

    onFollow = (userId) => { 
        this.props.setToogleIsFollowingInProgress(true, userId);
        usersAPI.follow(userId).then(resultCode => { 
            if (resultCode === 0) 
            { this.props.follow(userId); }
            this.props.setToogleIsFollowingInProgress(false, userId);
        }
        )
    }
    
    onUnFollow = (userId) => {
        this.props.setToogleIsFollowingInProgress(true, userId);
        usersAPI.unFollow(userId).then( resultCode =>
            { if (resultCode === 0) { this.props.unfollow(userId); }
            this.props.setToogleIsFollowingInProgress(false, userId);
        })
        }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users users={this.props.users} follow={this.onFollow} unfollow={this.onUnFollow}
                    totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged} getUsers={this.getUsers} 
                    followingInProgress={this.props.followingInProgress}></Users>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress : state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps_old = (dispatch) => {
//     return {
//         follow: (userId) => { dispatch(followActionCreator(userId)) },
//         unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
//         setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
//         setCurrentPage: (newPageNumber) => { dispatch(setCurrentPageActionCreator(newPageNumber)) },
//         setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountActionCreator(totalUsersCount)) }, 
//         setToogleIsFetching: (isFetching) => { dispatch(setToogleIsFetchingActionCreator(isFetching)) }            
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToogleIsFetching,
    setToogleIsFollowingInProgress
})(UsersClassComponent);

export default UsersContainer;