import styles from './User.module.css'
import userPhoto from '../../../resources/images/default_ava.jpg'
import { NavLink } from 'react-router-dom';
const User = (props) => {    
    return(
        <div key={props.user.id}>
            <NavLink to={`/profile/${props.user.id}`}>
                <img src={props.user.photos.small != null ? props.user.small : userPhoto} height='50px' width='50px'/>
            </NavLink>
            <span>{props.user.id}</span>
            <span>{props.user.FullName}</span>
            <div>{props.user.followed ? <span>followed</span> : <span>unfollowed</span>}</div>
            <div>
                { 
                    props.user.followed 
                    ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {props.unfollow(props.user.id)}}>UnFollow</button> 
                    : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {props.follow(props.user.id)}}>Follow</button>
                } 
            </div>                    
        </div>
    )
}

export default User;