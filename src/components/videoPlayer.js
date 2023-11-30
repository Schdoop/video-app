import React from 'react';

/**
 * Single video player component
 * Displays Vimeo player above the page
 *
 * @param video - video object in format of Vimeo API response
 * @param videoCloseHandler - callback for the Close button
 * @returns {Element}
 * @constructor
 */
const VideoPlayer = ({ video, videoCloseHandler }) => {
    return (
        video &&
            <div className="overlay" id='video'>
                <div className="overlay-content">
                    <h2>{video.name}</h2>
                    <iframe
                        src={video.player_embed_url}
                        width={document.documentElement.clientWidth * 0.6}
                        height={document.documentElement.clientHeight * 0.6}
                        frameBorder={0}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                    <img className="close-button" src="./close.svg" onClick={videoCloseHandler} alt="Close"/>
                </div>
            </div>
    );
};

export default VideoPlayer;