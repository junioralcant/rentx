import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Accessory } from '../Accessory';
import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';

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
  About,
  Acessories,
  Footer,
} from './styles';
import { Button } from '../Button';

export function CarDetails() {
  const navigation = useNavigation();

  function handlerConfirmeRental() {
    navigation.navigate('Scheduling');
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

        <About>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Pariatur quis neque quasi, aliquam beatae asperiores eum
          cumque a. Ex magni dolor quasi quam vitae fuga impedit iure
          quaerat quos esse.
        </About>
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
