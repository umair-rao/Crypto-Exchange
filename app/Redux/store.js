
import { configureStore } from '@reduxjs/toolkit'; 
import CoinsRootReducer from './FetchCoinData';
import marketRootReducer from './FetchMarketData';


export const store = configureStore({
  reducer: {
    coinsDetail: CoinsRootReducer,
    marketDetail: marketRootReducer,
  },
});

export default store;
