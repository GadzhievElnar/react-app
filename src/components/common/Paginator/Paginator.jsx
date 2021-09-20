import React from 'react';
import { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pages = [];

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Previus</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={currentPage === p ? styles.selectedPage : styles.pageNumber} onClick={(e) => { onPageChanged(p) }}>{p}</span>
                })}
            
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    );
}

export default Paginator;