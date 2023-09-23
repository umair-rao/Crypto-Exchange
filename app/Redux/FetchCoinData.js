import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { combineReducers } from 'redux';

const COINS_DETAIL = 'CoinsList/CoinsList/COINS_DETAIL';
const baseURL = 'https://api.coincap.io/v2/assets?4fd3137e-d1be-4a65-b2f0-6f1bcca16b88';


export const fetchCoinsData = createAsyncThunk(
    COINS_DETAIL,
  async (test,{ dispatch }) => {
    const response = await axios.get(`${baseURL}`);
    dispatch({ type: COINS_DETAIL, payload: response.data });
  },
);

const initialState = { coinsDetail: [] };

const fetchComisDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COINS_DETAIL:
      return {
        ...state,
        coinsDetail: action.payload,
      };
    default:
      return state;
  }
};


const CoinsRootReducer = combineReducers({
  coinsDetail: fetchComisDataReducer,
});

export default CoinsRootReducer;
