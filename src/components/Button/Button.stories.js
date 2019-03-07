import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import Button from './index';
import createTheme from '../../styles/theme';
import readme from './README.md';

const stories = storiesOf('Button', module);

const Default = () => (
  <ThemeProvider theme={createTheme()}>
    <Button type="button">Default</Button>
  </ThemeProvider>
);

const Primary = () => (
  <ThemeProvider theme={createTheme()}>
    <Button type="button" color="primary">Primary</Button>
  </ThemeProvider>
);

const Accent = () => (
  <ThemeProvider theme={createTheme()}>
    <Button type="button" color="accent">Accent</Button>
  </ThemeProvider>
);

const Disabled = () => (
  <ThemeProvider theme={createTheme()}>
    <Button disabled>Disabled</Button>
  </ThemeProvider>
);

const Link = () => (
  <ThemeProvider theme={createTheme()}>
    <Button aspect="link" component="a" onClick={e => e.preventDefault()}>Link</Button>
  </ThemeProvider>
);

const customTheme = {
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
const CustomTheme = () => {
  const Spacing = () => <div style={{ marginTop: '10px' }} />;

  return (
    <ThemeProvider theme={createTheme(customTheme)}>
      <div>
        <Button>Default</Button>

        <Spacing />
        <Button color="primary">Primary</Button>

        <Spacing />
        <Button color="accent">Accent</Button>

        <Spacing />
        <Button component="a" aspect="link">Link</Button>
      </div>
    </ThemeProvider>
  );
};

const Interactive = () => (
  <ThemeProvider theme={createTheme()}>
    <div>
      <Button
        color={select('color', { default: 'default', primary: 'primary', accent: 'accent' }, 'default')}
        aspect={select('aspect', { button: 'button', link: 'link' }, 'button')}
        component={select('component', { button: 'button', a: 'a', submit: 'submit' }, 'button')}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Button')}
      </Button>
    </div>
  </ThemeProvider>
);

stories
  .addDecorator(withDocs(readme))
  .add('Default', () => <Default />)
  .add('Primary', () => <Primary />)
  .add('Accent', () => <Accent />)
  .add('Disabled', () => <Disabled />)
  .add('Link', () => <Link />)
  .add('Custom Theme', () => <CustomTheme />)
  .add('Interactive (knobs)', () => <Interactive />);
