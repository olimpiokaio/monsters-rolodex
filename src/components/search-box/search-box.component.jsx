import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ pleaceholder, handlerChange }) => {
    return(
        <input
            className='search' 
            type='search' 
            pleaceholder={pleaceholder} 
            onChange={handlerChange} 
        />
    )
}