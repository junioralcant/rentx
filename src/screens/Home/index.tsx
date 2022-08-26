import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
} from './styles';

export function Home() {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://pngimg.com/uploads/audi/audi_PNG99491.png',
  };
  const carDataTwo = {
    brand: 'Audi',
    name: 'Q8',
    rent: {
      period: 'AO DIA',
      price: 300,
    },
    thumbnail:
      'https://production.autoforce.com/uploads/version/profile_image/6732/model_main_comprar-performance-55-tfsi-quattro-tiptronic_bd8e97334c.png',
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
      <Car data={carDataTwo} />
    </Container>
  );
}
