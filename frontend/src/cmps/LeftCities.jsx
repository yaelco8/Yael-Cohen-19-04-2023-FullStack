import { useDispatch } from "react-redux"
import {getCurrWeather} from "../store/cityWeather/apiCalls"

export const LeftCities=({currCities})=>{
    const dispatch=useDispatch()

    const getWeather=async(currCity)=>{
      await getCurrWeather(dispatch,currCity)
    }
    return <section className="LeftCities">
        {currCities.map(currCity=>{
   return <div className="LeftCities__city" onClick={()=>getWeather(currCity)} key={currCity.key}>{currCity.localCity}</div>
})}
    </section>
}