import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/UsersReducer";
import Users from "./UsersClassComponent";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;