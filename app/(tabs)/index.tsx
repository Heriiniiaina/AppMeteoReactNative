import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Text } from 'react-native';
import Home from '@/Pages/Home/Home';
import { s } from '@/constants/App.style';

export default function HomeScreen() {

  return (
    <>
      <SafeAreaProvider >
          <SafeAreaView style={s.container}>
              <Home/>
          </SafeAreaView>
        
      </SafeAreaProvider>
     
    </>
  );
}