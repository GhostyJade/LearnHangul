import React from 'react'
import WelcomeView from './views/welcome'
import HomeView from './views/home'
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const chooseTheme = (isLight) => {
  if (isLight)
    return eva.light
  return eva.dark
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={chooseTheme(true)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeView} />
          <Stack.Screen name="Home" component={HomeView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  )
}