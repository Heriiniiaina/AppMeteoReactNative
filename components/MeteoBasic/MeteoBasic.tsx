import { View, Text, Image } from 'react-native'
import React from 'react'
import Txt from '../TextFont/Txt'



const MeteoBasic = () => {
    return (
        <>
            <View>
                <Text>MeteoBasic</Text>
            </View>
            <Txt>City</Txt>
            <Txt>Label</Txt>
            <View>
                <Txt>3°</Txt>
                <Image/>
            </View>
        </>
    )
}

export default MeteoBasic