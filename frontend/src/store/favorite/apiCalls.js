import {favoriteService} from "../../services/favorite.service"
import {setNewFavorite,setFavorites,setDeleteFavorite,setCloseMsg} from "../favorite/favorite.slice"

export async function addToFavorites(dispatch,cityWeather){
    try {
        const newFavorite=await favoriteService.addFavorite(cityWeather)
        dispatch(setNewFavorite(newFavorite))
    } catch (error) {
        console.log("apiCalls.favorite-cannot add favorite",error);
    }
}

export async function getFavorites(dispatch){
    try {
        const favorites=await favoriteService.getAllFavorites()
        dispatch(setFavorites(favorites))
    } catch (error) {
        console.log("apiCalls.favorite-cannot get favorite",error);
        
    }
}

export async function deleteFavorite(dispatch,favoriteId){
    try {
        await favoriteService.removeFavorite(favoriteId)
        dispatch(setDeleteFavorite(favoriteId))
    } catch (error) {
        console.log("apiCalls.favorite-cannot delete favorite",error);
        
    }
}

export async function closeModal(dispatch){
    try {
        dispatch(setCloseMsg())
    } catch (error) {
      console.log("apiCalls.favorite-cannot close modal",error);
    
  }
}