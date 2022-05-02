import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login } from './views';
import Entry from './views/afterLogin/Entry';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entry" component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
