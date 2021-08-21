import styles from './User.module.css'

const User = (props) => {
    debugger;
    
    return(
        <div key={props.user.id}>
            <img src={props.user.photoURL} height='50px' width='50px'/>
            <span>{props.user.id}</span>
            <span>{props.user.FullName}</span>
            <div>{props.user.followed ? <span>followed</span> : <span>unfollowed</span>}</div>
            <div>
                { 
                    props.user.followed ? <button onClick={() => {props.unfollow(props.user.id)}}>UnFollow</button> : <button onClick={() => {props.follow(props.user.id)}}>Follow</button>
                } 
            </div>                    
        </div>
    )
}

export default User;