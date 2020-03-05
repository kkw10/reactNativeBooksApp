import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LobbyScreen from '~/screens/authentication/lobby';
import LoginScreen from '~/screens/authentication/login';
import RegisterScreen from '~/screens/authentication/register';

const AuthenticationStack = createStackNavigator();
const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      headerMode='float'
      screenOptions={{
        headerTitle: false,
        headerStyle: {
          elevation: 0,
        }
      }}
    >
      <AuthenticationStack.Screen
        name="Lobby_Screen"
        component={LobbyScreen}
        options={{ headerShown: false }}
      />
      <AuthenticationStack.Screen
        name="Login_Screen"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTransparent: true, // 헤더바 플로팅.
        }}
      />
      <AuthenticationStack.Screen
        name="Register_Screen"
        component={RegisterScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
        }}
      />      
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationStackNavigator;