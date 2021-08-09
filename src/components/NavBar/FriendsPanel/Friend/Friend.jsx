import react from 'react';
import styles from './Friend.module.css';

let Friend = (props) => {
    debugger;
    return(
        <div>
            <div><img src={props.data.imgSrc} className={styles.ava}></img></div>
            <div><span>{props.data.name}</span></div>
        </div>
    );
}

export default Friend;