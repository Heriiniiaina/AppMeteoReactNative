import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from './Home.style'

import {requestForegroundPermissionsAsync,getCurrentPositionAsync} from "expo-location"
import { MeteoApi } from '@/api/meteo'
type coord = {
    lat:number,
    lng:number
}
const Home = () => {
    const [coords,setCoords] = useState<coord>()
    const [weather,setWeather] = useState<object>()
    useEffect(()=>{
        getUserLocation()
    },[])
    useEffect(()=>{
        if(coords)
            fetchWeather(coords)
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
    console.log(coords)
    console.log(weather);
    
      return (
   <>
    <View style={style.meteo_basic}></View>
    <View style={style.meteo_searchBar}></View>
    <View style={style.meteo_advance}></View>
   </>
  )
}

export default Home