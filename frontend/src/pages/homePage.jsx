import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {getCities} from "../store/cityWeather/apiCalls"
import {addToFavorites,closeModal} from "../store/favorite/apiCalls"
import {LeftCities} from "../cmps/LeftCities"
import weatherImg from "../constants/weatherImg"



export const HomePage= ()=>{
    const currCities=useSelector(state=>state.cityWeather.cityWeather)
    const cityWeather=useSelector(state=>state.cityWeather.weather)
    const isMsg=useSelector(state=>state.favoriteSlice.isMsg)
    const [searchText,setSearchText]=useState("")
    const dispatch=useDispatch()
    

    const handleSearchText=(ev)=>{
        setSearchText(ev.target.value)
    }

    const onSubmit=async(ev)=>{
        ev.preventDefault()
        await getCities(dispatch,searchText)
    }

    const addFavorite=async(cityWeather)=>{
        await addToFavorites(dispatch,cityWeather)
    }

    const closMsg=async()=>{
      await closeModal(dispatch)
    }
console.log("isMsg",isMsg);
    return <section className="HomePage">
      {isMsg===true &&
      <div className="HomePage__msg">
        <button onClick={closMsg}>X</button>
        <span>City weather added to favorites page</span>
      </div>
      }
        <div>
        <form onSubmit={(event)=>onSubmit(event)}>
            <input onChange={handleSearchText} placeholder="Enter city name"/>
            <button>Search</button>
        </form>
        </div>
        <div className="HomePage__center">
          <div className="HomePage__center__weather">
              {cityWeather &&
            <div className="HomePage__center__weather__city">
              <span className="cityName">{cityWeather.localCity}</span>
              <span className="temp">{cityWeather.temperature} C</span>
              <span className="text">{cityWeather.weatherText}</span>
              <div className="img">
                <img src={`${weatherImg['img'+cityWeather.weatherIcon]}`} alt=""/>
              </div>
              <button className="addFavorite" onClick={()=>addFavorite(cityWeather)}>Add to favorite</button>
            </div>
              }
          </div>
            <div className="HomePage__center__cities">
            <LeftCities currCities={currCities}/>
            </div>
        </div>
    </section>
    
}