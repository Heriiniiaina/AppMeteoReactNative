import { View, Text } from 'react-native'
import React from 'react'
import { style } from './Home.style'



const Home = () => {
  return (
   <>
    <View style={style.meteo_basic}></View>
    <View style={style.meteo_searchBar}></View>
    <View style={style.meteo_advance}></View>
   </>
  )
}

export default Home