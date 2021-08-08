import react from 'react';
import styles from './Friend.module.css';

let Friend = (props) => {
    return(
        <div>
            <img src={props.imgSrc} className={styles.ava}></img>
        </div>
    );
}

export default Friend;