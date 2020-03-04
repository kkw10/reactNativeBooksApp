import React from 'react';
import styled from 'styled-components/native';
import { basicStyle } from '~/assets/style';

const Container = styled.View``;
const Label = styled.Text``;

const AllBooksScreen = () => {
  return (
    <Container style={basicStyle.Layout}>
      <Label>All Books Screen</Label>
    </Container>
  );
};

export default AllBooksScreen;
