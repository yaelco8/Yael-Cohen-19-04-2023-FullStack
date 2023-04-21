const weatherService=require("./weather.service")

module.exports={
    getCityWeather
}

async function getCityWeather(req,res){
    try {
        const {key}=req.body
        const cityWeather=req.body
        const currCirtWeather=await weatherService.getCurrWeather(key)
        cityWeather.weatherText=currCirtWeather[0].WeatherText
        cityWeather.weatherIcon=currCirtWeather[0].WeatherIcon
        cityWeather.temperature=currCirtWeather[0].Temperature.Metric.Value
        res.json(cityWeather)
    } catch (error) {
        console.log("weather.controller-cannot get city weather",error);
        res.send(error)
    }
}