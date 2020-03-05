import React from 'react';
import styled from 'styled-components/native';
import { colorSet } from '~/assets/colors';

const Container = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.strong ? (colorSet.strongPurple) : '#fff'};
  border: 1px;
  border-color: ${colorSet.strongPurple};
  border-radius: 25px;  
`;
const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.strong ? (colorSet.strongPurple) : '#fff'};
`;

interface Props {
  label: string;
  strong?: boolean;
  style?: object;
  handler?: () => void;
}

const AuthButton = ({ label, strong = false, style, handler }: Props) => {
  return (
    <Container
      strong={strong}
      style={style}
      onPress={handler}
    >
      <Label strong={!strong}>
        {label}
      </Label>
    </Container>
  );
};

export default AuthButton;
