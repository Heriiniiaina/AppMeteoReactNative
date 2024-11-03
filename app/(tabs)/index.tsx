import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ImageBackground, Text } from 'react-native';
import Home from '@/Pages/Home/Home';
import { s } from '@/constants/App.style';
import background from "@/assets/images/background.png"
export default function HomeScreen() {

  return (
    <>
    <ImageBackground source={background} style={s.imgBackground}>
      <SafeAreaProvider >
          <SafeAreaView style={s.container}>
              <Home/>
          </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
     
    </>
  );
}