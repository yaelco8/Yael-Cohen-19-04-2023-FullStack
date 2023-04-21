
const axios=require('axios')

module.exports={
    getCurrCities
}

async function getCurrCities(searchText){
    try {
        const apiKey=process.env.API_KEY1
         return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${searchText}`)
        .then(res=>res.data)  
        .catch(err=>{
            console.log("Had error:", err);
        })
    } catch (error) {
        console.log("city.service-cannot get cities",error);
    }
}

