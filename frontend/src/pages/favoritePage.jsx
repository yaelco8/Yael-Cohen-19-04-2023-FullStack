import { useDispatch, useSelector } from "react-redux"
import { LeftCities } from "../cmps/LeftCities"
import { useEffect } from "react";
import { getFavorites, deleteFavorite } from "../store/favorite/apiCalls"
import weatherImg from "../constants/weatherImg"


export const FavoritePage = () => {
  const currCities = useSelector(state => state.cityWeather.cityWeather)
  const currFavorites = useSelector(state => state.favoriteSlice.favorites)
  const dispatch = useDispatch()

  useEffect(() => {
    loadFavories()
  }, [])

  const loadFavories = async () => {
    await getFavorites(dispatch)
  }

  const removeFavorite = async (favoriteId) => {
    await deleteFavorite(dispatch, favoriteId)
  }

  return <section className="FavoritesPage">
    <div className="FavoritesPage__container">
      <div className="FavoritesPage__container__weather">
        {currFavorites.length>0 &&
          currFavorites.map(favorite => {
            return <div className="FavoritesPage__container__weather__city" key={favorite.key}>
              <button className="removeFavorite" onClick={() => removeFavorite(favorite._id)}>Delete favorite</button>
              <span className="cityName">{favorite.localCity}</span>
              <span className="temp">{favorite.temperature} C</span>
              <span className="text">{favorite.weatherText}</span>
              <div className="img">
                <img src={`${weatherImg['img'+favorite.weatherIcon]}`} alt="" />
              </div>
            </div>

          })
        }

      </div>
      <div className="FavoritesPage__container__cities">
        <LeftCities currCities={currCities} />
      </div>
    </div>
  </section>
}