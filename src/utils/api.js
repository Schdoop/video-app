import {VIMEO_API_URL, VIMEO_API_KEY} from "../config";

/**
 * Fetching videos list from Vimeo API
 *
 * @param category - string value, i.e. 'sports', should be existing category from Vimeo
 * @returns {Promise<*|*[]>}
 */
export const fetchVideos = async (category) => {
    try {
        const response = await fetch(`${VIMEO_API_URL}/categories/${category}/videos`, {
            headers: {
                Authorization: `Bearer ${VIMEO_API_KEY}`,
            },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};

/**
 * Performing the videos search from Vimeo
 *
 * @param searchTerm - string value, i.e. 'cats'
 * @returns {Promise<*|*[]>}
 */
export const searchVideos = async (searchTerm) => {
    try {
        const response = await fetch(`${VIMEO_API_URL}/videos?query=${searchTerm}`, {
            headers: {
                Authorization: `Bearer ${VIMEO_API_KEY}`,
            },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error searching videos:', error);
        return [];
    }
};