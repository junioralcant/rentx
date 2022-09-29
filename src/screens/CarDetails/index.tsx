import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CarDetailsParams } from '../../@types/navigation';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
  About,
  Accessories,
  Footer,
} from './styles';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as CarDetailsParams;

  function handlerConfirmeRental() {
    navigation.navigate('Scheduling');
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CardImage>
        <ImageSlider imagesUrl={car.photos} />
      </CardImage>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handlerConfirmeRental}
        />
      </Footer>
    </Container>
  );
}
