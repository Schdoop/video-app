# Video App Testing Task for Kitcast

A simple Vue/React application that allows users to browse and play video content from Vimeo.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Configuration

All needed configuration values can be set in config.js file.

It's mandatory to set only **VIMEO_API_KEY** value, you can obtain it from Vimeo's Developer Portal.

All the other values can be left as it is, however, you can make some customizations:

### CACHE_REFRESH_DURATION

How long the cache should live.

### CACHE_KEY

Change it only if you have some other key with same name in your localStorage, so it would not conflict.

### TEST_CATEGORY_NAME

This should be some existing and valid category name from Vimeo.

### SLIDER_SETTINGS

Slider settings, you can read about all the options [here](https://react-slick.neostack.com/docs/api).