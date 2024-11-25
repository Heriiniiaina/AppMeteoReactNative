import React from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { ImageBackground } from 'react-native';
import Home from '@/Pages/Home/Home';
import { s } from '@/constants/App.style';
import background from "@/assets/images/logo.jpeg"
import alata from "@/assets/fonts/11.1 Alata-Regular.ttf"
import {useFonts} from "expo-font"
export default function HomeScreen() {

  const [isFont] = useFonts({
      "Alata-Regular":alata
      
  })
 
  return (
   
    <ImageBackground source={background} style={s.imgBackground} imageStyle={s.img}>
      <SafeAreaProvider >
          <SafeAreaView style={s.container}>
             {isFont ? <Home/> : null } 
          </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
     
   
  );
}