const cityService=require("../city/city.service")

module.exports={
    getCities
}

async function getCities(req,res){
    try {
        const searchText=req.params.searchText
        let gCities=[]
        const citiesArray=await cityService.getCurrCities(searchText)
         await citiesArray.forEach((currCity)=>{
                let city={key:currCity.Key,localCity:currCity.LocalizedName}
                gCities.push(city)
                
        })
        res.json(gCities)
    } catch (error) {
        console.log("city.controller-cannot get cities",error);
        res.send(error)
    }
}
