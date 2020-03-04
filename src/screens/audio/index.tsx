import React from 'react';
import styled from 'styled-components/native';
import { basicStyle } from '~/assets/style';

const Container = styled.View``;
const Label = styled.Text``;

const AudioScreen = () => {
  return (
    <Container style={basicStyle.Layout}>
      <Label>Audio Screen</Label>
    </Container>
  );
};

export default AudioScreen;
