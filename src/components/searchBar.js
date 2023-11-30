import React, { useState } from 'react';

/**
 * Search Bar component
 *
 * @param onSearch - callback for performing a search
 * @returns {Element}
 * @constructor
 */
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const debouncedSearch = debounce(onSearch, 300);

    const handleSearch = () => {
        debouncedSearch(searchTerm);
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            debouncedSearch(searchTerm);
        }
    }

    const handleClear = () => {
        setSearchTerm('');
        debouncedSearch();
    };

    return (
        <div id="search-bar">
            <input
                type="text"
                className="search-field"
                placeholder="Search videos"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button className='search-btn' onClick={handleSearch}>Search</button>
            <button className='search-btn' onClick={handleClear}>Clear</button>
        </div>
    );
};

/**
 * Restricts function execution within given delay time
 *
 * @param func - callback function to restrict
 * @param delay - milliseconds
 * @returns {(function(...[*]): void)|*}
 */
const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export default SearchBar;