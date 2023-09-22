import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { combineReducers } from 'redux';

const COINS_DETAIL = 'CoinsList/CoinsList/COINS_DETAIL';
// const baseURL = 'http://api.coinlayer.com/list?access_key=e77228e502980f27c186cd82e5c1ec3e';

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


const rootReducer = combineReducers({
  coinsDetail: fetchComisDataReducer,
});

export default rootReducer;
