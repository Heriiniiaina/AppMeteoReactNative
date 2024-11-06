import { View, Text, Image } from 'react-native'
import React from 'react'
import Txt from '../TextFont/Txt'
import { s } from './MeteoBasic.style'
import Clock from '../Clock/Clock'

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
                <Clock/>
            </View>
            <Txt>{city}</Txt>
            <Txt style={s.weatherLabel}>{interpretation?.label}</Txt>
            <View style={s.temperatureBox}>
                <Txt style={s.temperature}>{`${temperature ?? "-"}`}°</Txt>
                <Image style={s.img} source={interpretation?.image}/>
            </View>
        </>
    )
}

export default MeteoBasic