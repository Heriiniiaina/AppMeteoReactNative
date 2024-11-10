import { View, Text, Image } from 'react-native'
import React from 'react'
import Txt from '../TextFont/Txt'
import { s } from './ForcastList.style'

interface forecastType  {
    image:any,
    date:string,
    temperature:number | string,
    day:string
}

const ForcastList = ({image,date,temperature,day}:forecastType) => {
  return (
    <View style={s.container}>
        <Image source={image} style={s.image}/>
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt style={s.temperature}>{temperature}</Txt>
    </View>
  )
}

export default ForcastList