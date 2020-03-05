import React from 'react';
import styled from 'styled-components/native';
import { basicStyle } from '~/assets/style';
import { colorSet } from '~/assets/colors';

const Container = styled.View`
  flex: 1;
`;
const TitleLabel = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${colorSet.strongPurple};
`;
const SubTitleLabel = styled.Text`
  font-size: 16px;
  color: ${colorSet.shadowPurple};
`;

const SectionDivision = styled.View`
  width: 100%;
`;

interface Props {
  title: string,
  subTitle?: string,
  children: React.ReactChild,
}

const AuthLayout = ({ title, subTitle, children }: Props) => {
  return (
    <Container 
      style={[
        basicStyle.Layout, 
        basicStyle.AuthLayout
      ]}
    >
      <SectionDivision style={{ marginBottom: 100 }}>
        <TitleLabel>
          {title}
        </TitleLabel>
        <SubTitleLabel style={{ marginTop: 10 }}>
          {subTitle}
        </SubTitleLabel>
      </SectionDivision>
      {children}
    </Container>
  );
};

export default AuthLayout;
