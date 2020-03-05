import React from 'react';
import { NavigationProp, NavigationState } from '@react-navigation/native';
import styled from 'styled-components/native';
import { colorSet } from '~/assets/colors';
import backgroundURL from '~/assets/images/background.jpg';

import AuthButton from '../authButton';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: space-around;
  padding: 0 40px;
`;

const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: ${colorSet.strongPurple};
  color: #fff;
`;
const SubTitle = styled.Text`
  font-size: 22px;
  color: ${colorSet.shadowPurple};
  color: #fff;
`;

const ButtonsContainer = styled.View`
  justify-content: center;
`;

interface Props {
  navigation: NavigationProp<NavigationState>
}

const LobbyScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <BackgroundImage source={backgroundURL}>
        <TitleContainer>
          <Title style={{ marginBottom: 10 }}>
            Welcome!
          </Title>
          <SubTitle>
            This is Books App.
          </SubTitle>      
        </TitleContainer>
        <ButtonsContainer>
          <AuthButton
            strong={true}
            label="Login"
            style={{ marginBottom: 20 }}
            handler={() => {
              navigation.navigate('Login_Screen')
            }}
          />
          <AuthButton
            label="Register"
            handler={() => {
              navigation.navigate('Register_Screen')
            }}
          /> 
        </ButtonsContainer>      
      </BackgroundImage>
    </Container>
  );
};

export default LobbyScreen;
