import {fetchVideos} from "./api";
import {CACHE_KEY, TEST_CATEGORY_NAME} from "../config";

/**
 * Function to get videos from cache or fetch if not available
 *
 * @param category - string value, i.e. 'sports', should be existing category from Vimeo
 * @returns {Promise<*|*[]>}
 */
export const getVideos = async (category) => {
    const cachedVideos = localStorage.getItem(CACHE_KEY);
    if (cachedVideos) {
        return JSON.parse(cachedVideos);
    } else {
        const videos = await fetchVideos(category);
        setVideosInCache(videos);
        return videos;
    }
};

/**
 * Function to set videos in the cache
 *
 * @param videos - array of videos in format of Vimeo API response
 */
const setVideosInCache = (videos) => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(videos));
};

/**
 * Function to clear the cache of videos and fetch it again
 *
 * @returns {Promise<void>}
 */
export const refreshCache = async () => {
    localStorage.removeItem(CACHE_KEY);
    const videos = await fetchVideos(TEST_CATEGORY_NAME);
    setVideosInCache(videos);
};