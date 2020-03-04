import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BookMarkScreen from '~/screens/bookMark';

const BookMarkStack = createStackNavigator();
const BookMarkStackNavigator = () => {
  return (
    <BookMarkStack.Navigator>
      <BookMarkStack.Screen
        name="BookMark_Screen"
        component={BookMarkScreen}
      />
    </BookMarkStack.Navigator>
  );
};

export default BookMarkStackNavigator;