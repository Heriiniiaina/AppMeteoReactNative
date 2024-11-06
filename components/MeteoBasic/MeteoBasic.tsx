import { View, Text, Image } from 'react-native'
import React from 'react'
import Txt from '../TextFont/Txt'
import { s } from './MeteoBasic.style'

type interpretation = {
    label:string,
    image:any
}
interface weatherProps{
    temperature?:number,
    city?:string,
    interpretation?:interpretation 
}

const MeteoBasic = ({temperature,city,interpretation}:weatherProps) => {
    return (
        <>
            <View style={s.clock}>
                <Txt>Clock</Txt>
            </View>
            <Txt>{city}</Txt>
            <Txt style={s.weatherLabel}>Label</Txt>
            <View style={s.temperatureBox}>
                <Txt style={s.temperature}>{`${temperature ?? "-"}`}°</Txt>
                <Image style={s.img} source={interpretation?.image}/>
            </View>
        </>
    )
}

export default MeteoBasic