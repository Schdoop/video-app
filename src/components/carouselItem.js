import React from 'react';

/**
 * Carousel Item component
 * Renders single video item in list
 *
 * @param video - video object in format of Vimeo API response
 * @param videoClickHandler - callback that handles showing video popup
 * @returns {Element}
 * @constructor
 */
const CarouselItem = ({ video, videoClickHandler }) => {
    return (
        <div className="carousel-item">
            <img
                src={video.pictures.sizes[2].link}
                alt={video.name}
                onClick={videoClickHandler}
            />
        </div>
    );
};

export default CarouselItem;