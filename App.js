import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeView from './views/welcome';
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'

const chooseTheme = (isLight) => {
  if (isLight)
    return eva.light
  return eva.dark
}

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={chooseTheme(true)}>
      <WelcomeView />
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
