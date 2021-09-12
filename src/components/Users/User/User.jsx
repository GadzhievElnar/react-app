import styles from './User.module.css'
import userPhoto from '../../../resources/images/default_ava.jpg'
import { NavLink } from 'react-router-dom';

const User = ({user, follow, unfollow, followingInProgress}) => {    
    return(
        <div key={user.id}>
            <NavLink to={`/profile/${user.id}`}>
                <img alt='img' src={user.photos.small != null ? user.small : userPhoto} height='50px' width='50px'/>
            </NavLink>
            <span>{user.id}</span>
            <span>{user.FullName}</span>
            <div>{user.followed ? <span>followed</span> : <span>unfollowed</span>}</div>
            <div>
                { 
                    user.followed 
                    ? <button disabled={followingInProgress.some(id => id === user.id)} 
                              onClick={() => {unfollow(user.id)}}>UnFollow</button> 
                    : <button disabled={followingInProgress.some(id => id === user.id)} 
                              onClick={() => {follow(user.id)}}>Follow</button>
                } 
            </div>                    
        </div>
    )
}

export default User;