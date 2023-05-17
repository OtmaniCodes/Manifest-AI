import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import servicesReducer from './servicesSlice';
import articlesReducer from './articlesSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    services: servicesReducer,
    articles: articlesReducer,
  },
});

export default store;
