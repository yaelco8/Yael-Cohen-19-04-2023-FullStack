import { httpService } from "./http.service"

export const favoriteService={
    addFavorite,
    getAllFavorites,
    removeFavorite
}

async function addFavorite(cityWeather){
try {
    return await httpService.post(`favorite`,cityWeather)
} catch (error) {
    console.log("favorite.service-cannot add favorite",error);
}
}

async function getAllFavorites(){
    try {
        return await httpService.get(`favorite`)
    } catch (error) {
        console.log("favorite.service-cannot get favorites",error);
        
    }
}

async function removeFavorite(favoriteId){
    try {
        return await httpService.delete(`favorite/:${favoriteId}`)
    } catch (error) {
        console.log("favorite.service-cannot delete favorite",error);
        
    }
}