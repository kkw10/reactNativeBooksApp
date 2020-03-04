import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { headerConfig, headerButtonConfig } from '~/routes/navConfig';
import AllBookScreen from '~/screens/allBooks';

const AllBooksStack = createStackNavigator();
const AllBooksStackNavigator = () => {
  return (
    <AllBooksStack.Navigator
      screenOptions={{
        ...headerConfig,
        title: 'All Books',
      }}
    >
      <AllBooksStack.Screen
        name="AllBooks_Screen"
        component={AllBookScreen}
        options={{
          ...headerButtonConfig,
        }}
      />
    </AllBooksStack.Navigator>
  );
};

export default AllBooksStackNavigator;