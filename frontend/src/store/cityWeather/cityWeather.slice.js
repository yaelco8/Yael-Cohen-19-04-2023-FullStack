import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  cityWeather:[],
  weather:null
};

export const cityWeather = createSlice({
  name: 'cityWeather',
  initialState,
  reducers: {
    setCityWeather:(state,action)=>{
     state.cityWeather=action.payload
    },
    setWeather:(state,action)=>{
        state.weather=action.payload
    }
}});

export const {setCityWeather,setWeather} = cityWeather.actions;

export default cityWeather.reducer;
