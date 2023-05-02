import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cityWeather from "../store/cityWeather/cityWeather.slice"
import favoriteSlice from './favorite/favorite.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cityWeather,
    favoriteSlice
  },
});
