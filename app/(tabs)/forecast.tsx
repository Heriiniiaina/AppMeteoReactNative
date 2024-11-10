import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { s } from '@/constants/App.style'
import background from "@/assets/images/background.png"
import alata from "@/assets/fonts/11.1 Alata-Regular.ttf"
import Txt from '@/components/TextFont/Txt'
type Props = {}
const Header = (
    <View style={s.header}>
        <View style={s.header_Text}>
            <Txt>Antananativo</Txt>
            <Txt style={s.subtitle}>Prevision pour 7 jours</Txt>
        </View>
    </View>
)
const forecast = (props: Props) => {
    const forecastData = useSelector((state: RootState) => state.data.data);
    console.log(forecastData)
    return (
        <>
        <ImageBackground source={background} style={s.imgBackground} imageStyle={s.img}>
          <SafeAreaProvider >
              <SafeAreaView style={s.container}>
                    {Header}
              </SafeAreaView>
          </SafeAreaProvider>
        </ImageBackground>
         
        </>

    )
}

export default forecast