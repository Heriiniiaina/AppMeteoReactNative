import { View, Text } from 'react-native'
import React from 'react'

interface forecastType  {
    image:any,
    date:string,
    temperature:number | string
}

const ForcastList = ({image,date,temperature}:forecastType) => {
  return (
    <View>
      <Text>ForcastList</Text>
    </View>
  )
}

export default ForcastList