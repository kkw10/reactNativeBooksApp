import React from 'react';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconButton from '~/components/iconButton';

// Screen...
import LoginScreen from '~/screens/authentication/login';

// Route Navigators...
import AllBooksStackNavigator from '~/routes/allBooks';
import RatingStackNavigator from '~/routes/rating';
import AudioStackNavigator from '~/routes/audio';
import BookMarkStackNavigator from '~/routes/bookMarker';
import MyPageStackNavigator from '~/routes/myPage';
import { colorSet } from './assets/colors';

const TabButton = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.active ? `${colorSet.underLine}` : 'white'};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainBottomTab = createBottomTabNavigator();
const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0, // 탭바 쉐도우 제거
          borderTopWidth: 0,
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          let icon = null;

          switch (route.name) {
            case 'AllBooks_Navigator': {
              icon = 
                <TabButton active={focused ? true : false}>
                  <IconButton 
                    onlyIcon
                    iconName="home"
                    iconSize={22}
                    iconColor={focused ? colorSet.strongPurple : colorSet.shadowPurple} 
                  />                 
                </TabButton>
            }
            break
            case 'Rating_Navigator': {
              icon = 
                <TabButton active={focused ? true : false}>
                  <IconButton
                    onlyIcon
                    iconName="bar-chart"
                    iconSize={22}
                    iconColor={focused ? colorSet.strongPurple : colorSet.shadowPurple}
                  />                
                </TabButton>
            }
            break
            case 'Audio_Navigator': {
              icon = 
                <TabButton active={focused ? true : false}>
                  <IconButton
                    onlyIcon
                    iconName="mic"
                    iconSize={22}
                    iconColor={focused ? colorSet.strongPurple : colorSet.shadowPurple}
                  />                
                </TabButton>
            }
            break
            case 'BookMark_Navigator': {
              icon = 
                <TabButton active={focused ? true : false}>
                  <IconButton
                    onlyIcon
                    iconName="bookmark"
                    iconSize={22}
                    iconColor={focused ? colorSet.strongPurple : colorSet.shadowPurple}
                  />                
                </TabButton>
            }
            break
            case 'MyPage_Navigator': {
              icon = 
                <TabButton active={focused ? true : false}>
                  <IconButton
                    onlyIcon
                    iconName="user"
                    iconSize={22}
                    iconColor={focused ? colorSet.strongPurple : colorSet.shadowPurple}
                  />                
                </TabButton>
            }
            break        
          }

          return icon;
        }
      })}
    >
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
