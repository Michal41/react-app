import React from 'react';
import './search-box.styles.css'
export const SearchBox = ({ placecholder, handleChange }) => (
    <input
    className='search' 
    type='search' 
    placeholder={ placecholder } 
    onChange={handleChange}
    />
)