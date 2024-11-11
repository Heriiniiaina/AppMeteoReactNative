import { View, Text, Image } from 'react-native'
import React from 'react'
import Txt from '../TextFont/Txt'
import { s } from './ForcastList.style'
import { getInterpretation } from '@/services/meteoService'
import { DAYS, dayToDDMM } from '@/services/dateService'

interface forecastType  {
  
    date:string,
    temperature:number,
    day:string,
    weatherCode:number
}

const ForcastList = ({date,temperature,weatherCode}:forecastType) => {
    const image = getInterpretation(weatherCode)?.image
    const day = DAYS[new Date(date).getDay()]
    const d = new Date(date)

  return (
    <View style={s.container}>
        <Image source={image} style={s.image}/>
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{dayToDDMM(d)}</Txt>
        <Txt style={s.temperature}>{Math.round(temperature)}°C</Txt>
        
    </View>
  )
}

export default ForcastList