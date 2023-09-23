import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { combineReducers } from 'redux';

const MARKET_DETAIL = 'MarketDetails/MarketDetails/MARKET_DETAIL';
const marketBaseURL = 'https://api.coincap.io/v2/exchanges?4fd3137e-d1be-4a65-b2f0-6f1bcca16b88'


export const fetchMarketData = createAsyncThunk(
  MARKET_DETAIL,
  async (test,{ dispatch }) => {
    const response = await axios.get(`${marketBaseURL}`);
    dispatch({ type: MARKET_DETAIL, payload: response.data });
  },
);


const initialState = { marketDetail: [] };

const fetchMarketDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARKET_DETAIL:
      return {
        ...state,
        marketDetail: action.payload,
      };
    default:
      return state;
  }
};


const marketRootReducer = combineReducers({
  marketDetail: fetchMarketDataReducer,
});

export default marketRootReducer;
