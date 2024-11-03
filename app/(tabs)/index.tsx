import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Text } from 'react-native';

export default function HomeScreen() {

  return (
    <>
      <SafeAreaProvider >
          <SafeAreaView>
              <Text>Hello</Text>
          </SafeAreaView>
        
      </SafeAreaProvider>
     
    </>
  );
}