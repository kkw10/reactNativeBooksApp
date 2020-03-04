import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyPageScreen from '~/screens/myPage';

const MyPageStack = createStackNavigator();
const MyPageStackNavigator = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name="MyPage_Screen"
        component={MyPageScreen}
      />
    </MyPageStack.Navigator>
  );
};

export default MyPageStackNavigator;