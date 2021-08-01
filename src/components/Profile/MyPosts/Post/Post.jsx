import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://n7.nextpng.com/sticker-png/895/865/sticker-png-cartoon-ninja-mini-ninjas-fictional-character-american-ninja-can-stock-photo-depositphotos.png'/>
            {props.message}
            <span>Like</span>
        </div>
    );
}

export default Post;