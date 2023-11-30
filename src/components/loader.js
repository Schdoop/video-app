import React from 'react';

/**
 * Simple loader component, shows spinner above the page
 *
 * @param loading
 * @returns {Element}
 * @constructor
 */
const Loader = ({loading}) => {
    return (
        loading &&
        <div className="overlay">
            <div className="overlay-content">
                <img src='./spinner.svg'  alt='Loading'/>
            </div>
        </div>
    );
};

export default Loader;