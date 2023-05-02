import {setCityWeather,setWeather} from "../cityWeather/cityWeather.slice"
import {weatherService} from "../../services/weather.service"

export async function getCities(dispatch,searchText){
    try {
        const relCities=await weatherService.getCities(searchText)
        console.log("relCities",relCities);
        dispatch(setCityWeather(relCities))
    } catch (error) {
        console.log("apiCalls.cityWeather-cannot get cities",error);
    }
}

export async function getCurrWeather(dispatch,currCity){
    try {
        const cityWeather= await weatherService.getCityWeather(currCity)
        dispatch(setWeather(cityWeather))
    } catch (error) {
        console.log("apiCalls.cityWeather-cannot get weather",error);
        
    }
}