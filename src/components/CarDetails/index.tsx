import React from 'react';
import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';

import { Container, Header, CardImage } from './styles';

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
    </Container>
  );
}
