import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { headerConfig, headerButtonConfig } from '~/routes/navConfig';
import RatingScreen from '~/screens/rating';

const RatingStack = createStackNavigator();
const RatingStackNavigator = () => {
  return (
    <RatingStack.Navigator
      screenOptions={{
        ...headerConfig,
        title: 'Rating'
      }}
    >
      <RatingStack.Screen
        name="Rating_Screen"
        component={RatingScreen}
        options={{
          ...headerButtonConfig,
        }}
      />
    </RatingStack.Navigator>
  );
};

export default RatingStackNavigator;