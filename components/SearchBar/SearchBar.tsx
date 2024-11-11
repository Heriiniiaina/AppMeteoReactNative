import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { s } from './SearchBar.style'

interface SearchBarProps{
    onSubmit:(city:string)=>void
}

const SearchBar = ({onSubmit}:SearchBarProps) => {
  return (
    <TextInput style={s.input} onSubmitEditing={(e)=> onSubmit(e.nativeEvent.text.trim())} placeholder='Cherche une ville' returnKeyType='done'/>
  )
}

export default SearchBar