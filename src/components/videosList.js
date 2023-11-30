import React from 'react';
import Slider from "react-slick";
import {SLIDER_SETTINGS} from "../config";
import CarouselItem from "./carouselItem";

/**
 * Videos List component
 * Shows carousel of videos
 *
 * @param videos - array of videos in format of Vimeo API response
 * @param videoClickHandler - callback for showing a single video popup
 * @param videosRefreshHandler - callback for Refresh button
 * @returns {Element}
 * @constructor
 */
const VideosList = ({ videos, videoClickHandler, videosRefreshHandler }) => {
    return (
        <div id='list'>
            <Slider {...SLIDER_SETTINGS}>
                {videos.map((video, key) =>
                    <CarouselItem
                        key={key}
                        video={video}
                        videoClickHandler={() => videoClickHandler(video)}/>
                )}
            </Slider>
            <img className="refresh-button" src="./refresh.svg" onClick={videosRefreshHandler} alt="Refresh" title="Refresh cache"/>
        </div>
    );
};

export default VideosList;