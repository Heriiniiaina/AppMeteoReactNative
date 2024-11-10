import { View, Text,ImageBackground } from 'react-native'
import React, { useState,useEffect } from 'react'
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

type weatherDataType = {
    daily:{
        time:string[]
    }
}
const forecast = (props: Props) => {
    const forecastData = useSelector((state: RootState) => state.data.data);
    const [weather,setWeather] = useState([])
    console.log(forecastData.daily.time)
    
    if (!forecastData || !forecastData.daily || !forecastData.daily.time) {
        return (
            <Text>Loading...</Text>  // Afficher un message de chargement si les données ne sont pas disponibles
        );
    }
    useEffect(() => {
        if (forecastData?.daily?.time) {
            const weatherData = forecastData.daily.time.map((time, index) => ({
                date: time,
                weatherCode: forecastData.daily.weathercode[index],
                maxTemp: forecastData.daily.temperature_2m_max[index],
                sunrise: forecastData.daily.sunrise[index],
                sunset: forecastData.daily.sunset[index],
                windSpeed: forecastData.daily.windspeed_10m_max[index],
            }));
            setWeather(weatherData);  // Mise à jour de l'état une seule fois
        }
    }, [forecastData]);
    return (
        <>
        <ImageBackground source={background} style={s.imgBackground} imageStyle={s.img}>
          <SafeAreaProvider >
              <SafeAreaView style={s.container}>
                    {Header}
                    <View>
                        {forecastData?.daily.time.map((time, index) => (
                            <ForcastList key={time} day={time} />
                        ))}
                    </View>
                        
              </SafeAreaView>
          </SafeAreaProvider>
        </ImageBackground>
         
        </>

    )
}

export default forecast