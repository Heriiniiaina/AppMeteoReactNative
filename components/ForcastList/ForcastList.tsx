import { View, Text, Image } from 'react-native'
import React from 'react'
import Txt from '../TextFont/Txt'
import { s } from './ForcastList.style'
import { getInterpretation } from '@/services/meteoService'

interface forecastType  {
    image:any,
    date:string,
    temperature:number | string,
    day:string,
    weatherCode:number
}

const ForcastList = ({date,temperature,day,weatherCode}:forecastType) => {
    const image = getInterpretation(weatherCode)?.image
  return (
    <View style={s.container}>
        <Image source={image} style={s.image}/>
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt style={s.temperature}>{temperature}</Txt>
        <Txt>{weatherCode}</Txt>
    </View>
  )
}

export default ForcastList