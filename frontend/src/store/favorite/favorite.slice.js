import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
 favorites:[],
 isMsg:false
};

export const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    setNewFavorite:(state,action)=>{
        state.isMsg=true
        state.favorites.push(action.payload)
    },
    setFavorites:(state,action)=>{
        state.favorites=action.payload
    },
    setDeleteFavorite:(state,action)=>{
        state.favorites = state.favorites.filter(currFavorite => {
            return currFavorite._id !== action.payload
        })
    },
    setCloseMsg:(state)=>{
        state.isMsg=false
    }
}});

export const {setNewFavorite,setFavorites,setDeleteFavorite,setCloseMsg} = favoriteSlice.actions;

export default favoriteSlice.reducer;
