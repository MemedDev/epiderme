import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import ImageComponent from './index';
import readme from './README.md';


const Image = () => (
  <ImageComponent
    src={
      text('src', 'https://memed.com.br/resources/img/logo.png')
    }
    alt={
      text('alt', 'Image Placeholder')
    }
  />
);

storiesOf('Image', module)
  .addDecorator(withDocs(readme))
  .add('Simple', () => <Image />);
