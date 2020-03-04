import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen...
import LoginScreen from '~/screens/authentication/login';

// Route Navigators...
import AllBooksStackNavigator from '~/routes/allBooks';
import RatingStackNavigator from '~/routes/rating';
import AudioStackNavigator from '~/routes/audio';
import BookMarkStackNavigator from '~/routes/bookMarker';
import MyPageStackNavigator from '~/routes/myPage';

const MainBottomTab = createBottomTabNavigator();
const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen
        name="AllBooks_Navigator"
        component={AllBooksStackNavigator}
      />
      <MainBottomTab.Screen
        name="Rating_Navigator"
        component={RatingStackNavigator}
      />
      <MainBottomTab.Screen
        name="Audio_Navigator"
        component={AudioStackNavigator}
      />
      <MainBottomTab.Screen
        name="BookMark_Navigator"
        component={BookMarkStackNavigator}
      />
      <MainBottomTab.Screen
        name="MyPage_Navigator"
        component={MyPageStackNavigator}
      />
    </MainBottomTab.Navigator>
  )
}

const MainDrawer = createDrawerNavigator();
const MainDrawerNavigator = () => {
  return (
    <MainDrawer.Navigator
      drawerPosition='right'
      
    >
      <MainDrawer.Screen
        name="MainBttomTab_Navigator"
        component={MainBottomTabNavigator}
      />
    </MainDrawer.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootNavigator = () => {
  const userToken = false;

  return (
    <RootStack.Navigator>
      {userToken ? (
        <RootStack.Screen
          name="CheckLogin"
          component={LoginScreen}
        />        
      ) : (
        <RootStack.Screen
          name="MainDrawer_Navigator"
          component={MainDrawerNavigator}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
