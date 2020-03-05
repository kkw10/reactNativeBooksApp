import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { colorSet } from '~/assets/colors';

import Input from '~/components/input';
import IconButton from '~/components/iconButton';

const Container = styled.View`
  width: 100%;
`;
const FieldLabel = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colorSet.shadowPurple};
`;
const FieldWrap = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colorSet.shadowPurple};
`;
const InputWrap = styled.View`
  width: 90%;
`;

interface Props {
  label: string;
  iconName: 'mail' | 'key';
  style?: object,
};

const AuthInput = ({ label, iconName, style }: Props) => {
  return (
    <Container style={style}>
      <FieldLabel>{label}</FieldLabel>
      <FieldWrap>
        <IconButton
          onlyIcon
          iconName={iconName}
          iconSize={22}
          iconColor={colorSet.shadowPurple}
          style={{ marginRight: 10 }}
        />
        <InputWrap>
          <Input
            secureTextEntry={iconName === 'key' ? true : false}
          />        
        </InputWrap>
      </FieldWrap>
    </Container>
  );
};

export default AuthInput;
