import { connect } from "react-redux";
import { getUsersThunkCreator,
         followThunkCreator,
         unFollowThunkCreator } from "../../redux/UsersReducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.getUsers(this.props.currentPage);
        }
    }

    getUsers = (pageNumber) => { this.props.getUsersThunkCreator(pageNumber, this.props.pageSize); }

    onPageChanged = (pageNumber) => {this.props.getUsersThunkCreator(pageNumber, this.props.pageSize); }

    onFollow = (userId) => { this.props.followThunkCreator(userId); }
    
    onUnFollow = (userId) => { this.props.unFollowThunkCreator(userId); }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users users={this.props.users} 
                       follow={this.onFollow} 
                       unfollow={this.onUnFollow}
                       totalUsersCount={this.props.totalUsersCount} 
                       pageSize={this.props.pageSize} 
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged} 
                       getUsers={this.getUsers} 
                       followingInProgress={this.props.followingInProgress}>                           
                </Users>
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

const UsersContainer = 
  connect( mapStateToProps, 
          { getUsersThunkCreator,
            followThunkCreator,
            unFollowThunkCreator }
         )(UsersClassComponent);

export default UsersContainer;