import React from 'react';
import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';

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
} from './styles';

export function CarDetails() {
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

        <About>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Pariatur quis neque quasi, aliquam beatae asperiores eum
          cumque a. Ex magni dolor quasi quam vitae fuga impedit iure
          quaerat quos esse.
        </About>
      </Content>
    </Container>
  );
}
