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

import Asset from './index';
import AssetHeader from '../AssetHeader';
import AssetDescription from '../AsssetDescription';
import AssetFooter from '../AssetFooter';
import Text from '../Text';
import Avatar from '../Avatar';
import Button from '../Button';

import createTheme from '../../styles/theme';
import readme from './README.md';

const withTheme = storyFn => (
  <ThemeProvider theme={createTheme()}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: '340px',
        textAlign: 'left',
      }}
    >
      {storyFn()}
    </div>
  </ThemeProvider>
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
  <Asset thumbnail={<Avatar />}>
    <AssetHeader
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      icon="pointer-right"
    />
    <AssetDescription>
      {text('description', 'Lorem ipsum dolor sit amet')}
    </AssetDescription>
    <AssetFooter>
      <div>
        <Text component="label" weight="bold">{text('footerLabel', 'Qtd: ')}</Text>
        <Text component="span" color="black50">{text('footerValue', 'Value')}</Text>
      </div>
      <div>
        <Button type="button" aspect="link">Action</Button>
      </div>
    </AssetFooter>
  </Asset>
);

storiesOf('Asset', module)
  .addDecorator(withTheme)
  .addDecorator(withFonts)
  .addDecorator(withDocs(readme))
  .add('Default', () => <Default />);
