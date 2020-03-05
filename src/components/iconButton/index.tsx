import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  iconName: 
    | 'menu'
    | 'search'
    | 'home'
    | 'bar-chart'
    | 'mic'
    | 'bookmark'
    | 'user'
    | 'mail'
    | 'key',
  iconSize?: number,
  iconColor?: string,
  backgroundColor?: string,
  style?: object,
  onPress?: () => void,
  onlyIcon?: boolean,
}

const IconButton = ({
  iconName,
  iconSize = 20,
  iconColor = '#333',
  backgroundColor = '#fff', 
  style,
  onPress,
  onlyIcon,
}: Props) => {
  return (
    <>
      {onlyIcon ? (
        <View style={style}>
          <Icon
            name={iconName}
            size={iconSize}
            color={iconColor}
            backgroundColor={backgroundColor}
          />        
        </View>
      ) : (
        <TouchableOpacity
          style={style}
          onPress={() => {
            if (onPress && typeof onPress === 'function') onPress();
          }}
        >
          <Icon
            style={{ paddingHorizontal: 10, }}
            name={iconName}
            size={iconSize}
            color={iconColor}
            backgroundColor={backgroundColor}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default IconButton;
