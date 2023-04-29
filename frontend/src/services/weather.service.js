import {httpService} from './http.service'

export const weatherService={
getCities,
getCityWeather
}

async function getCities(searchText){
    try {
        return await httpService.get(`city/${searchText}`)
    } catch (error) {
        console.log("weather.service-cannot get cities",error);
    }
}

async function getCityWeather(currCity){
    try {
        return await httpService.post(`weather`,currCity)
    } catch (error) {
        console.log("weather.service-cannot get weather",error);
        
    }
}