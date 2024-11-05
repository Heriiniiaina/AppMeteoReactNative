import { View, Text } from 'react-native'
import React from 'react'
import { style } from './Txt.style'


type props = {
    children:string | number
}
const Txt = ({children}:props) => {
  return (
   
      <Text>{children}</Text>
   
  )
}

export default Txt