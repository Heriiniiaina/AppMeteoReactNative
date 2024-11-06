import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from './Home.style'

import {requestForegroundPermissionsAsync,getCurrentPositionAsync} from "expo-location"
import { MeteoApi } from '@/api/meteo'
import Txt from '@/components/TextFont/Txt'
import MeteoBasic from '@/components/MeteoBasic/MeteoBasic'
import { getInterpretation, WEATHER_INTERPRATIONS } from '@/services/meteoService'
type coord = {
    lat:number,
    lng:number
}
type weatherDataType = {
    current_weather:{
        temperature: number,
        weathercode:number
    }
}
const Home = () => {
    const [coords,setCoords] = useState<coord>()
    const [weather,setWeather] = useState<weatherDataType>()
    const [city,setCity] = useState<string>("")
    useEffect(()=>{
        getUserLocation()
    },[])
    useEffect(()=>{
        if(coords){
            fetchWeather(coords)
            fetchCity(coords)
        }

    },[coords])
    const getUserLocation = async ()=>{
        const {status} = await requestForegroundPermissionsAsync()
        if(status==="granted"){
            const location = await getCurrentPositionAsync()
            
            setCoords({lat:location.coords.latitude, lng:location.coords.longitude})
        } else{
            setCoords({lat:48.85, lng:2.23})
        }
    } 
    const fetchWeather = async (coords:coord)=>{
        const weather =await MeteoApi.fetchWeather(coords)
        setWeather(weather)
    }
    const fetchCity = async (coords:coord)=>{
        const city = await MeteoApi.fetchCity(coords)
        console.log(city)
    }
    console.log(coords)
    console.log(weather);
    
      return (
   <>
    <View style={style.meteo_basic}>
      <MeteoBasic temperature={weather?.current_weather ? Math.round(weather.current_weather.temperature) : undefined} interpretation={weather?.current_weather ? getInterpretation(weather.current_weather.weathercode) : undefined} city={city}/>
    </View>
    <View style={style.meteo_searchBar}></View>
    <View style={style.meteo_advance}></View>
   </>
  )
}

export default Home