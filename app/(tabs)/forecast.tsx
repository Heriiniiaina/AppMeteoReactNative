import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from "react-redux"
import {RootState} from "@/redux/store"
type Props = {}

const forecast = (props: Props) => {
    const forecastData = useSelector((state: RootState) => state.data.data);
    console.log(forecastData)
  return (
    <View>
      <Text>forecast</Text>
    </View>
  )
}

export default forecast