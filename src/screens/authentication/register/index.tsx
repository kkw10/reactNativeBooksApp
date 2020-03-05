import React from 'react';
import styled from 'styled-components/native';
import { basicStyle } from '~/assets/style';

import AuthLayout from '../authLayout';
import AuthButton from '../authButton';
import AuthInput from '../authInput';
import { Alert } from 'react-native';

const SectionDivisition = styled.View`
  width: 100%;
`;

const RegisterScreen = () => {
  const onPress = () => {
    Alert.alert('Register!');
  }

  return (
    <AuthLayout
      title="Register"
      subTitle="Welcom to Books App!"
    >
      <>
        <SectionDivisition style={{ marginBottom: 100 }}>
          <AuthInput
            label="Email"
            iconName="mail"
            style={{ marginBottom: 30 }}
          />
          <AuthInput
            label="Password"
            iconName="key"
            style={{ marginBottom: 30 }}
          />
          <AuthInput
            label="Password check"
            iconName="key"
          />          
        </SectionDivisition>
        <SectionDivisition>
          <AuthButton
            label="Register"
            handler={onPress}
          />
        </SectionDivisition>
      </>
    </AuthLayout>
  );
};

export default RegisterScreen;
