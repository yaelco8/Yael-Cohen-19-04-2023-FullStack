const axios=require('axios')

module.exports={
    getCurrWeather
}

async function getCurrWeather(key){
    try {
        const apiKey=process.env.API_KEY1
        return axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}&details=false`)
        .then(res=>res.data)
        .catch(err=>{
            console.log("Had error:", err);
        })
    } catch (error) {
       console.log("weather.service-cannot get city weather",error); 
    }
}