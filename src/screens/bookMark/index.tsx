import React from 'react';
import styled from 'styled-components/native';
import { basicStyle } from '~/assets/style';

const Container = styled.View``;
const Label = styled.Text``;

const BookMarkScreen = () => {
  return (
    <Container style={basicStyle.Layout}>
      <Label>Book Mark Screen</Label>
    </Container>
  );
};

export default BookMarkScreen;
