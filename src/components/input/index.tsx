import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colorSet } from '~/assets/colors';

const Container = styled.View`
  width: 100%;
  height: 40px;
`;
const InputField = styled.TextInput``;

interface Props {
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
};

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;