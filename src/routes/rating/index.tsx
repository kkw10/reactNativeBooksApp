import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RatingScreen from '~/screens/rating';

const RatingStack = createStackNavigator();
const RatingStackNavigator = () => {
  return (
    <RatingStack.Navigator>
      <RatingStack.Screen
        name="Rating_Screen"
        component={RatingScreen}
      />
    </RatingStack.Navigator>
  );
};

export default RatingStackNavigator;