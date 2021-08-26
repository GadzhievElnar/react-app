const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true    
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
        
        case SET_TOOGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }

        default: return state; 
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (newPageNumber) => ({type: SET_CURRENT_PAGE, newPageNumber})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setToogleIsFetching = (isFetching) => ({type: SET_TOOGLE_IS_FETCHING, isFetching})

export default UsersReducer;