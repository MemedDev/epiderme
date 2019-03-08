import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import Text from './index';
import createTheme from '../../styles/theme';
import readme from './README.md';

const stories = storiesOf('Text', module);

const Alignment = () => (
  <ThemeProvider theme={createTheme()}>
    <>
      <Text align="left">
        Text left aligned
      </Text>
      <Text align="center">
        Text center aligned
      </Text>
      <Text align="right">
        Text right aligned
      </Text>
      <Text align="justify">
        Text Justified: Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus dolore ipsa delectus ratione libero alias, reiciendis amet modi a? Officia debitis at velit illo iure nemo aut neque dolorem!
      </Text>
    </>
  </ThemeProvider>
);

const Color = () => (
  <ThemeProvider theme={createTheme()}>
    <>
      <Text color="default">
        Text with default color
      </Text>
      <Text color="primary">
        Text with primary color
      </Text>
      <Text color="accent">
        Text with accent color
      </Text>
      <Text color="black50">
        Text with black50 color
      </Text>
      <Text color="black24">
        Text with black24 color
      </Text>
      <div style={{ color: 'rebeccapurple' }}>
        <Text color="inherit">
          This text inherits its parent color (rebeccapurple)!
        </Text>
      </div>
    </>
  </ThemeProvider>
);

const Weights = () => (
  <ThemeProvider theme={createTheme()}>
    <>
      <Text weight="light">
        Text with light weight
      </Text>
      <Text weight="regular">
        Text with regular weight
      </Text>
      <Text weight="medium">
        Text with medium weight
      </Text>
      <Text weight="semibold">
        Text with semibold weight
      </Text>
      <Text weight="bold">
        Text with bold weight
      </Text>
      <div style={{ fontWeight: 900 }}>
        <Text weight="inherit">
          This text inherits its parent font-weight (900)
        </Text>
      </div>
    </>
  </ThemeProvider>
);

const Scales = () => (
  <ThemeProvider theme={createTheme()}>
    <>
      <Text scale="subtitle2" weight="bold">
        Text with subtitle2 scale
      </Text>
      <Text scale="body1">
        Text with body1 scale
      </Text>
      <Text scale="caption1">
        Text with caption1 scale
      </Text>
    </>
  </ThemeProvider>
);

const Interactive = () => {
  const alignments = ['left', 'center', 'right', 'justify', 'inherit'];
  const colors = ['default', 'primary', 'accent', 'black50', 'black24', 'inherit'];
  const scales = ['body1', 'caption1', 'subtitle2'];
  const weights = ['light', 'regular', 'medium', 'semibold', 'bold', 'inherit'];

  return (
    <ThemeProvider theme={createTheme()}>
      <>
        <Text
          align={select('align', alignments, 'inherit')}
          color={select('color', colors, 'default')}
          component={text('component', 'p')}
          scale={select('scale', scales, 'body1')}
          weight={select('weight', weights, 'regular')}
        >
          {text('text', 'Lorem ipsum dolor sit amet.')}
        </Text>
      </>
    </ThemeProvider>
  );
};

stories
  .addDecorator(withDocs(readme))
  .add('Alignment', () => <Alignment />)
  .add('Color', () => <Color />)
  .add('Weights', () => <Weights />)
  .add('Scales', () => <Scales />)
  .add('Interactive', () => <Interactive />);
