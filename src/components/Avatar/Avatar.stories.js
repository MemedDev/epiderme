import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import Avatar from './index';
import ImageComponent from '../Image';
import createTheme from '../../styles/theme';
import readme from './README.md';

const Default = () => (
  <ThemeProvider theme={createTheme()}>
    <Avatar />
  </ThemeProvider>
);

const Image = () => (
  <ThemeProvider theme={createTheme()}>
    <Avatar>
      <ImageComponent
        src={
          text('src', 'https://memed.com.br/resources/img/logo.png')
        }
        alt={
          text('alt', 'Logo Memed')
        }
      />
    </Avatar>
  </ThemeProvider>
);

const Text = () => (
  <ThemeProvider theme={createTheme()}>
    <Avatar>
      {text('text', 'MD')}
    </Avatar>
  </ThemeProvider>
);

storiesOf('Avatar', module)
  .addDecorator(withDocs(readme))
  .add('Default', () => <Default />)
  .add('Image', () => <Image />)
  .add('Text', () => <Text />);
