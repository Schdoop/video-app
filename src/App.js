import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import {useEffect, useState} from "react";
import Slider from "react-slick";

import {CACHE_REFRESH_DURATION, SLIDER_SETTINGS, TEST_CATEGORY_NAME} from './config';
import CarouselItem from "./components/carouselItem";
import VideoPlayer from "./components/videoPlayer";
import {getVideos, refreshCache} from "./utils/cache";
import SearchBar from "./components/searchBar";
import {searchVideos} from "./utils/api";
import Loader from "./components/loader";
import VideosList from "./components/videosList";

function App() {

    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState();
    const [loading, setLoading] = useState(false);

    /**
     * Main function to fetch the videos list
     * Should be called once on component mount
     *
     * @returns {Promise<void>}
     */
    const fetchVideosData = async () => {
        setLoading(true);
        const cachedVideos = await getVideos(TEST_CATEGORY_NAME);
        setVideos(cachedVideos);
        setFilteredVideos(cachedVideos);
        setLoading(false);
    };

    useEffect(() => {
        fetchVideosData();
    }, []);

    const handleSearch = async (searchTerm) => {
        if (searchTerm) {
            setLoading(true);
            const searchResults = await searchVideos(searchTerm);
            setFilteredVideos(searchResults);
            setLoading(false);
        } else {
            setFilteredVideos(videos);
        }
    };

    /**
     * Refreshing the videos cache on user action
     *
     * @returns {Promise<void>}
     */
    const handleRefresh = async () => {
        setLoading(true);
        await refreshCache();
        setLoading(false);
    };

    useEffect(() => {
        // Refresh the cache after a specified duration
        const intervalId = setInterval(() => {
            refreshCache();
        }, CACHE_REFRESH_DURATION);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="App">
            <SearchBar onSearch={handleSearch} />
            <VideosList videos={filteredVideos} videoClickHandler={setSelectedVideo} videosRefreshHandler={handleRefresh} />
            <VideoPlayer video={selectedVideo} videoCloseHandler={() => setSelectedVideo(null)}/>
            <Loader loading={loading} />
        </div>
    );
}

export default App;
