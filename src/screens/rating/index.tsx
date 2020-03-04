import React from 'react';
import styled from 'styled-components/native';
import { basicStyle } from '~/assets/style';

const Container = styled.View``;
const Label = styled.Text``;

const RatingScreen = () => {
  return (
    <Container style={basicStyle.Layout}>
      <Label>Rating Screen</Label>
    </Container>
  );
};

export default RatingScreen;
