const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:[
        {id: 1, followed: false, FullName: 'Artem', status: 'I am Analitic', location: {city: 'Rostov on Don', Country: 'Russia'}, photoURL: 'https://w7.pngwing.com/pngs/300/499/png-transparent-bart-simpson-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-drawing-bart-simpson-springfield-cartoon-fictional-character.png'},
        {id: 2, followed: true, FullName: 'Tania', status: 'I am Soprovozdenie', location: {city: 'Acsay', Country: 'Russia'}, photoURL: 'https://pbs.twimg.com/media/DytbnDyWwAEq9gW.jpg'},
        {id: 3, followed: true, FullName: 'Dimas', status: 'I am Sviazist', location: {city: 'Rostov on Don', Country: 'Russia'}, photoURL: 'https://avatarko.ru/img/kartinka/28/multfilm_Futurama_Bender_27624.jpg'},
        {id: 4, followed: false, FullName: 'Serega', status: 'I am Gruzchik', location: {city: 'Belaya Kalitva', Country: 'Russia'}, photoURL: 'https://e7.pngegg.com/pngimages/13/178/png-clipart-spongebob-squarepants-illustration-graphy-computer-icons-sponge-bob-cartoon-spongebob-squarepants.png'}
    ]
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
                users: [...state.users, ...action.users]
            }
        default: return state; 
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default UsersReducer;