import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import AuthInput from '../authInput';
import AuthButton from '../authButton';
import AuthLayout from '../authLayout';

const SectionDivision = styled.View`
  width: 100%;
`;

const LoginScreen = () => {
  const onPress = () => {
    Alert.alert('Login!');
  };

  return (
    <AuthLayout
      title="Login"
      subTitle="Hello Stranger!"
    >
      <>
        <SectionDivision style={{ marginBottom: 100 }}>
          <AuthInput
            label="Email"
            iconName="mail"
            style={{ marginBottom: 30 }}
          />
          <AuthInput
            label="Password"
            iconName="key"
          />
        </SectionDivision>
        <SectionDivision>
          <AuthButton
            label="Login"
            strong={true}
            handler={onPress}
          />
        </SectionDivision>      
      </>
    </AuthLayout>
  );
};

export default LoginScreen;
