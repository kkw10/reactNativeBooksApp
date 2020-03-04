import React from 'react';
import styled from 'styled-components/native';
import { basicStyle } from '~/assets/style';

const Container = styled.View``;
const Label = styled.Text``;

const MyPageScreen = () => {
  return (
    <Container style={basicStyle.Layout}>
      <Label>MyPage Screen</Label>
    </Container>
  );
};

export default MyPageScreen;
