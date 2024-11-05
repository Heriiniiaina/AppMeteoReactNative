import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from './Home.style'

import {requestForegroundPermissionsAsync,getCurrentPositionAsync} from "expo-location"
type coord = {
    lat:number,
    lng:number
}
const Home = () => {
    const [coords,setCoords] = useState<coord>()
    useEffect(()=>{
        getUserLocation()
    },[])
    const getUserLocation = async ()=>{
        const {status} = await requestForegroundPermissionsAsync()
        if(status==="granted"){
            const location = await getCurrentPositionAsync()
            
            setCoords({lat:location.coords.latitude, lng:location.coords.longitude})
        } else{
            setCoords({lat:48.85, lng:2.23})
        }
    } 
    console.log(coords)
      return (
   <>
    <View style={style.meteo_basic}></View>
    <View style={style.meteo_searchBar}></View>
    <View style={style.meteo_advance}></View>
   </>
  )
}

export default Home