import { View, Text } from 'react-native'
import React from 'react'
import { s } from './MeteoAdvanced.style'
import Txt from '../TextFont/Txt'

interface meteoeAdvancedType{
    dusk:string | number,
    dawn:number | string,
    wind:number
}

const MeteoAdvanced = ({dusk,dawn,wind}:meteoeAdvancedType) => {
    return (
        <View style={s.container}>
            <View style={{alignItems:"center"}}>
                <Txt style={{fontSize:20}}>{dusk}</Txt>
                <Txt style={{fontSize:15}}>Aube</Txt>
            </View>
            <View style={{alignItems:"center"}}>
                <Txt style={{fontSize:20}}>{dawn}</Txt>
                <Txt style={{fontSize:15}}>Crépuscule</Txt>
            </View>
            <View style={{alignItems:"center"}}>
                 <Txt style={{fontSize:20}}>{wind} km/h</Txt>
                 <Txt style={{fontSize:15}}>Vent</Txt>
            </View>
        </View>
    )
}

export default MeteoAdvanced