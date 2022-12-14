import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolinaSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CardImage,
  Content,
  Details,
  Brand,
  Rent,
  Period,
  Price,
  Description,
  Name,
  Acessories,
  Footer,
  RentalPediod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RetalPriceQuoto,
  RetalPriceTotal,
} from './styles';

import { Button } from '../../components/Button';

export function SchedulingDatails() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handlerConfirmeRental() {
    navigation.navigate('SchedulingComplete');
  }

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CardImage>
        <ImageSlider
          imagesUrl={[
            'https://pngimg.com/uploads/audi/audi_PNG99491.png',
          ]}
        />
      </CardImage>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Acessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolinaSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>

        <RentalPediod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-left"
            size={RFValue(24)}
            color={theme.colors.shape}
          />

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPediod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RetalPriceQuoto>R$ 580 x3 di??rias</RetalPriceQuoto>
            <RetalPriceTotal>R$ 2.9000</RetalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handlerConfirmeRental}
        />
      </Footer>
    </Container>
  );
}
