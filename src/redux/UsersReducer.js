import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../utils/objectHelpers";

const FOLLOW = 'samurai-network/users/FOLLOW';
const UNFOLLOW = 'samurai-network/users/UNFOLLOW';
const SET_USERS = 'samurai-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'samurai-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-network/users/SET_TOTAL_USERS_COUNT';
const SET_TOOGLE_IS_FETCHING = 'samurai-network/users/TOOGLE_IS_FETCHING';
const SET_TOOGLE_FOLLOWING_PROGRESS = 'samurai-network/users/SET_TOOGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: updateObjectInArray(state.users, action.userId, "id", {followed: true}) 
                users: state.users.map(u => {
                     if (u.id === action.userId) {
                         return {
                             ...u,
                             followed: true
                         }
                     }
                     else {
                         return u;
                     }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: updateObjectInArray(state.users, action.userId, "id", {followed: false}) 
                  users: state.users.map(u => {
                      if (u.id === action.userId) {
                          return {
                             ...u,
                              followed: false
                          }
                      }
                      else {
                          return u;
                      }
                  })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newPageNumber
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case SET_TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_TOOGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.inProgress
                        ? [...state.followingInProgress, action.idUser]
                        : state.followingInProgress.filter(id => id !== action.idUser)
            }


        default: return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (newPageNumber) => ({ type: SET_CURRENT_PAGE, newPageNumber })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setToogleIsFetching = (isFetching) => ({ type: SET_TOOGLE_IS_FETCHING, isFetching })
export const setToogleIsFollowingInProgress = (inProgress, idUser) => ({ type: SET_TOOGLE_FOLLOWING_PROGRESS, inProgress, idUser })

export const getUsersThunkCreator = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setToogleIsFetching(true));

    let data = await usersAPI.getUsers(pageNumber, pageSize);

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setToogleIsFetching(false));
}


export const followThunkCreator = (userId) => async (dispatch) => {
    setToogleIsFollowingInProgress(true, userId);
    let resultCode = await usersAPI.follow(userId);

    if (resultCode === 0) { dispatch(follow(userId)); }

    dispatch(setToogleIsFollowingInProgress(false, userId));
}

export const unFollowThunkCreator = (userId) => async (dispatch) => {
    dispatch(setToogleIsFollowingInProgress(true, userId));
    let resultCode = await usersAPI.unFollow(userId);

    if (resultCode === 0) { dispatch(unfollow(userId)); }
    dispatch(setToogleIsFollowingInProgress(false, userId));
}

export default UsersReducer;