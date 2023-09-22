
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './FetchCoinData';

export const store = configureStore({
  reducer: {
    coinsDetail: rootReducer,
  },
});

export default store;
