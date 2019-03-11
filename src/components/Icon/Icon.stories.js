import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  text,
  select,
  color,
  object,
} from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import Icon from './index';
import createTheme from '../../styles/theme';
import readme from './README.md';

const withTheme = storyFn => (
  <ThemeProvider theme={createTheme()}>{storyFn()}</ThemeProvider>
);

const withFonts = storyFn => (
  <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/csilva2810/test-cdn/styles.css"
    />

    {storyFn()}
  </>
);

const Default = () => (
  <Icon name="done" />
);

const Preloader = () => (
  <Icon name="preloader" animation="spin" />
);

const CustomStyles = () => (
  <Icon
    name="done"
    style={{
      color: 'rgba(74,144,226,1)',
      fontSize: '3em',
    }}
  />
);

const Inheritance = () => (
  <div style={{ fontSize: '60px', color: 'red' }}>
    <Icon name="done" size="inherit" />
  </div>
);

const icons = [
  'dacademic-cap',
  'done',
  'pointer-left',
  'triangle-down',
  'alert',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'calendar',
  'checked',
  'close',
  'edit',
  'help',
  'options',
  'padlock-locked',
  'padlock-unlocked',
  'play',
  'plus',
  'pointer-down',
  'pointer-right',
  'pointer-up',
  'preloader',
  'reload',
  'reset',
  'search',
  'share',
  'shield',
  'star',
  'trash',
  'triangle-right',
  'triangle-up',
  'user',
  'triangle-left',
  'map',
  'printer',
  'heart',
  'align-center',
  'align-left',
  'align-right',
  'notifications',
  'email',
  'star-full',
  'map-1',
  'prescription',
  'protocols',
  'done-fill',
];

const Interactive = () => (
  <Icon
    name={select('name', icons, 'done')}
    size={select('size', ['small', 'medium', 'large'], 'medium')}
    style={object('styles', {
      color: color('color', '#333'),
      fontSize: text('fontsize', ''),
    })}
  />
);

storiesOf('Icon', module)
  .addDecorator(withFonts)
  .addDecorator(withTheme)
  .addDecorator(withDocs(readme))
  .add('Default', () => <Default />)
  .add('CustomStyles', () => <CustomStyles />)
  .add('Inheritance', () => <Inheritance />)
  .add('Preloader', () => <Preloader />)
  .add('Interactive (knobs)', () => <Interactive />);
