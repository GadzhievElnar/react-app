import React from 'react';
import styles from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    Tania
                </div>

                <div className={styles.dialog}>
                    Artur
                </div>   

                <div className={styles.dialog}>
                    Zhenia
                </div>   

                <div className={styles.dialog}>
                    Stas
                </div>                                
            </div>

            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}></div>
                <div className={styles.message}></div>
                <div className={styles.message}></div>
            </div>            
        </div>
    );
}

export default Dialogs;