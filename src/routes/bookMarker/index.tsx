import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { headerConfig, headerButtonConfig } from '~/routes/navConfig';
import BookMarkScreen from '~/screens/bookMark';

const BookMarkStack = createStackNavigator();
const BookMarkStackNavigator = () => {
  return (
    <BookMarkStack.Navigator
      screenOptions={{
        ...headerConfig,
        title: 'Book Marker'
      }}
    >
      <BookMarkStack.Screen
        name="BookMark_Screen"
        component={BookMarkScreen}
        options={{
          ...headerButtonConfig,
        }}
      />
    </BookMarkStack.Navigator>
  );
};

export default BookMarkStackNavigator;