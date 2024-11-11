import { View, Text, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { s } from '@/constants/App.style'
import background from "@/assets/images/background.png"
import Txt from '@/components/TextFont/Txt'
import ForcastList from '@/components/ForcastList/ForcastList'

type Props = {}



type weatherDataType = {
  daily: {
    time: string[]
    weathercode: string[]
    temperature_2m_max: number[]
    sunrise: string[]
    sunset: string[]
    windspeed_10m_max: number[]
  }
}

const Forecast = (props: Props) => {
  const forecastData = useSelector((state: RootState) => state.data.weather) as weatherDataType | null
  const city = useSelector((state:RootState)=>state.data.city)  as string
  const [weather, setWeather] = useState<any[]>([])

  
  if (!forecastData || !forecastData.daily) {
    return (
      <Text>Loading...</Text>  
    )
  }

  useEffect(() => {
    if (forecastData && forecastData?.daily?.time) {
      const weatherData = forecastData.daily.time.map((time:any, index:any) => ({
        date: time,
        weatherCode: forecastData.daily.weathercode[index],
        maxTemp: forecastData.daily.temperature_2m_max[index],
        sunrise: forecastData.daily.sunrise[index],
        sunset: forecastData.daily.sunset[index],
        windSpeed: forecastData.daily.windspeed_10m_max[index],
      }))
      setWeather(weatherData)  
    }
  }, [forecastData])  
  const Header = (
    <View style={s.header}>
      <View style={s.header_Text}>
        <Txt>{city}</Txt>
        <Txt style={s.subtitle}>Prevision pour 7 jours</Txt>
      </View>
    </View>
  )
  return (
    <ImageBackground source={background} style={s.imgBackground} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {Header}
          <View>
            {weather.map((day, index) => (
               
                <ForcastList key={day.date} day={day.time} date={day.date} weatherCode={day.weatherCode} temperature={day.maxTemp}/>
            ))}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  )
}

export default Forecast
