import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import { s } from './Txt.style'


type props = {
    children?:string | number | (string | number)[],
    style?:TextStyle
}
const Txt = ({children,style}:props) => {
  return (
   
      <Text style={[s.txt,style]}>{children}</Text>
   
  )
}

export default Txt