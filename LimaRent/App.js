import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login } from './views';
import Entry from './views/afterLogin/Entry';
import Frota from './views/afterLogin/Frota';
import Profile from './views/afterLogin/Profile';
import Reservar from './views/afterLogin/Reservar';
import Documentos from './views/profileOptions/Documentos';
import Politicas from './views/profileOptions/Politicas';
import Termos from './views/profileOptions/Termos';
import AddID from './views/profileOptions/AddID';
import AddDL from './views/profileOptions/AddDL';
import InfoCar from './views/afterLogin/InfoCar';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entry" options={{ headerShown: false }} component={Entry} />
        <Stack.Screen name="Frota" component={Frota} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        <Stack.Screen name="Reservar" component={Reservar} />
        <Stack.Screen name="Documentos" component={Documentos} />
        <Stack.Screen name="Politicas" component={Politicas} />
        <Stack.Screen name="Termos" component={Termos} />
        <Stack.Screen name="AddID" options={{ headerShown: false }} component={AddID} />
        <Stack.Screen name="AddDL" options={{ headerShown: false }} component={AddDL} />
        <Stack.Screen name="InfoCar" component={InfoCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
