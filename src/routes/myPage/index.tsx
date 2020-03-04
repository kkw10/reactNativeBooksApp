import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { headerConfig, headerButtonConfig } from '~/routes/navConfig';
import MyPageScreen from '~/screens/myPage';

const MyPageStack = createStackNavigator();
const MyPageStackNavigator = () => {
  return (
    <MyPageStack.Navigator
      screenOptions={{
        ...headerConfig,
        title: 'My Page'
      }}
    >
      <MyPageStack.Screen
        name="MyPage_Screen"
        component={MyPageScreen}
        options={{
          ...headerButtonConfig,
        }}
      />
    </MyPageStack.Navigator>
  );
};

export default MyPageStackNavigator;