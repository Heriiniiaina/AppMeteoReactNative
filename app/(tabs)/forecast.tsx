import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { s } from '@/constants/App.style'
import background from "@/assets/images/background.png"
import alata from "@/assets/fonts/11.1 Alata-Regular.ttf"
import Txt from '@/components/TextFont/Txt'
import ForcastList from '@/components/ForcastList/ForcastList'
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
                    <View style={{marginTop:20}}>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                        <ForcastList image={require("@/assets/images/clouds.png")} date='11/12/2024' day='Lundi' temperature={20}/>
                    </View>
              </SafeAreaView>
          </SafeAreaProvider>
        </ImageBackground>
         
        </>

    )
}

export default forecast