import React from 'react';
import { BackButton } from '../BackButton';
import {
  Container,
  Header,
  Title,
  RentalPediod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../Button';

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} />

        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </Title>

        <RentalPediod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPediod>
      </Header>

      <Content></Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
