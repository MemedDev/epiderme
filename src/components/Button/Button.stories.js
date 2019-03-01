import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import Button from './index';
import createTheme from '../../styles/theme';
import markdown from './README.md';

const getColorSelectKnob = () => {
  const label = 'color';
  const options = {
    default: 'default',
    primary: 'primary',
    accent: 'accent',
  };
  const defaultValue = 'primary';

  return { label, options, defaultValue };
};

const stories = storiesOf('Button', module);

stories.add(
  'with text',
  () => {
    const { label, options, defaultValue } = getColorSelectKnob();
    const selectedColor = select(label, options, defaultValue);

    const theme = createTheme();
    console.log('teste', theme);

    return (
      <ThemeProvider theme={theme}>
        <Button
          type="button"
          variant={selectedColor}
          disabled={boolean('Disabled', false)}
        >
          {text('Text', 'Button')}
        </Button>
      </ThemeProvider>
    );
  },
  { notes: { markdown } },
);

stories.add('with custom theme', () => {
  const custom = {
    palette: {
      default: {
        main: '#aaa',
        lighten: '#aaa',
        darken: '#aaa',
        text: 'black',
      },
      primary: {
        main: '#6152A4',
        lighten: '#6152A4',
        darken: '#6152A4',
        text: 'white',
      },
      accent: {
        main: '#EF7052',
        lighten: '#EF7052',
        darken: '#EF7052',
        text: 'white',
      },
    },
  };
  const { label, options, defaultValue } = getColorSelectKnob();
  const selectedColor = select(label, options, defaultValue);

  return (
    <ThemeProvider theme={createTheme(custom)}>
      <Button variant={selectedColor}>{text('Text', 'Button')}</Button>
    </ThemeProvider>
  );
});
