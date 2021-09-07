import { connect } from "react-redux";
import { getUsersThunkCreator,
         followThunkCreator,
         unFollowThunkCreator } from "../../redux/UsersReducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFolowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "./UsersSelectors";

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
        users: getUsers(state),//state.usersPage.users,
        pageSize: getPageSize(state),//state.usersPage.pageSize,
        totalUsersCount: getTotalUsersCount(state),//state.usersPage.totalUsersCount,
        currentPage: getCurrentPage(state),//state.usersPage.currentPage,
        isFetching: getIsFetching(state),//state.usersPage.isFetching,
        followingInProgress : getFolowingInProgress(state)//state.usersPage.followingInProgress
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

export default compose(
    connect( mapStateToProps, { getUsersThunkCreator, followThunkCreator, unFollowThunkCreator }),
    WithAuthRedirect
)(UsersClassComponent);