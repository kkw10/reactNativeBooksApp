import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AudioScreen from '~/screens/audio';

const AudioStack = createStackNavigator();
const AudioStackNavigator = () => {
  return (
    <AudioStack.Navigator>
      <AudioStack.Screen
        name="Audio_Screen"
        component={AudioScreen}
      />
    </AudioStack.Navigator>
  );
};

export default AudioStackNavigator;