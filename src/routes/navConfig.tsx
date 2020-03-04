import React from 'react';
import IconButton from '~/components/iconButton';
import { colorSet } from '~/assets/colors';

const headerConfig = {
  headerTintColor: colorSet.strongPurple,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerTitleAlign: 'center',
  headerStyle: {
    elevation: 0, // 헤더 쉐도우 제거
    borderBottomWidth: 0,
  },
};

const headerButtonConfig = {
  headerLeft: () => (
    <IconButton
      iconName='menu'
      iconColor={colorSet.strongPurple}
    />
  ),
  headerRight: () => (
    <IconButton
      iconName='search'
      iconColor={colorSet.strongPurple}
    />
  ),
}

export { headerConfig, headerButtonConfig }