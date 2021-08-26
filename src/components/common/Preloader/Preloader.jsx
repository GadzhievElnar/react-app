import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../../resources/images/131.gif';

const Preloader = (props) => {
    return <div>
        <img src={preloader} />
    </div>
}

export default Preloader;