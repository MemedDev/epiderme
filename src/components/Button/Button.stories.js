import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import Button from './index';
import markdown from './README.md';

const getColorSelectKnob = () => {
  const label = 'color';
  const options = {
    default: 'default',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
  };
  const defaultValue = 'primary';

  return { label, options, defaultValue };
};

const stories = storiesOf('Button', module);

stories.addWithJSX(
  'with text',
  () => {
    const { label, options, defaultValue } = getColorSelectKnob();
    const selectedColor = select(label, options, defaultValue);

    return (
      <Button
        type="button"
        color={selectedColor}
        disabled={boolean('Disabled', false)}
      >
        {text('Text', 'Button')}
      </Button>
    );
  },
  { notes: { markdown } },
);

stories.addWithJSX('with some emoji', () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
));

stories.addWithJSX('with BP theme', () => {
  const bp = {
    default: '#aaa',
    primary: '#6152A4',
    secondary: '#EF7052',
    success: 'green',
    danger: 'red',
    warning: 'orange',
    info: 'blue',
  };
  const { label, options, defaultValue } = getColorSelectKnob();
  const selectedColor = select(label, options, defaultValue);

  return (
    <ThemeProvider theme={bp}>
      <Button color={selectedColor}>{text('Text', 'Button')}</Button>
    </ThemeProvider>
  );
});
