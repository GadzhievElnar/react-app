const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1    
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId)
                    {
                        return {
                            ...u, 
                            followed: true
                        }
                    }
                    else
                    {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId)
                    {
                        return {
                            ...u, 
                            followed: false
                        }
                    }
                    else
                    {
                        return u;
                    }
                })
            }
        case SET_USERS:
            return {
                ...state, 
                users: [ ...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newPageNumber
            }
        
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        default: return state; 
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export const setCurrentPageActionCreator = (newPageNumber) => ({type: SET_CURRENT_PAGE, newPageNumber})
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default UsersReducer;