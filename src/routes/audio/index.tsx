import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { headerConfig, headerButtonConfig } from '~/routes/navConfig';
import AudioScreen from '~/screens/audio';

const AudioStack = createStackNavigator();
const AudioStackNavigator = () => {
  return (
    <AudioStack.Navigator
      screenOptions={{
        ...headerConfig,
        title: 'Audio',
      }}
    >
      <AudioStack.Screen
        name="Audio_Screen"
        component={AudioScreen}
        options={{
          ...headerButtonConfig,
        }}
      />
    </AudioStack.Navigator>
  );
};

export default AudioStackNavigator;