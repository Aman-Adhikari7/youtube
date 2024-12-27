import { configureStore } from '@reduxjs/toolkit';
import appsReducer from './appSlice'; // Import the appSlice reducer

export const store = configureStore({
    reducer: {
        apps: appsReducer, // Connect the appSlice reducer here
    },
});

export default store;

