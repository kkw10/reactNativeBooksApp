import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AllBookScreen from '~/screens/allBooks';

const AllBooksStack = createStackNavigator();
const AllBooksStackNavigator = () => {
  return (
    <AllBooksStack.Navigator>
      <AllBooksStack.Screen
        name="AllBooks_Screen"
        component={AllBookScreen}
      />
    </AllBooksStack.Navigator>
  );
};

export default AllBooksStackNavigator;