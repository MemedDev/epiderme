import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text, select, color } from '@storybook/addon-knobs';
import Avatar from '../Avatar';
import Image from '../Image';
import createTheme from '../../styles/theme';
import { fontWeightBold, fontWeightMedium } from '../../styles/variables';

import Header from './index';
import readme from './README.md';

const stories = storiesOf('Header', module);
const theme = createTheme();

const Icon = () => {
  const style = {
    maxWidth: '25px',
    paddingTop: '4px',
    height: '25px',
  };

  return (
    <img
      src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_right_48px-512.png"
      style={style}
      alt=""
      prop=""
    />
  );
};

const Title = ({ text }) => {
  const styles = {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.subtitle2.fontSize,
    lineHeight: theme.typography.subtitle2.lineHeight,
    fontWeight: fontWeightBold,
    letterSpacing: theme.typography.subtitle2.letterSpacing,
    margin: 0,
  };

  return (
    <h1 style={styles}>{text}</h1>
  );
};

const Subtitle = ({ text }) => {
  const styles = {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    letterSpacing: theme.typography.body1.letterSpacing,
    fontWeight: fontWeightMedium,
    margin: 0,
  };

  return (
    <h4 style={styles}> {text} </h4>
  );
};

const Thumbnail = ({ image }) => (
  <Avatar>
    <Image
      src={image}
      alt={
        text('alt', 'Image Placeholder')
      }
    />
  </Avatar>
);

const HeaderOnlyWithTitle = () => (
  <ThemeProvider theme={theme}>
    <Header
      title={<Title text={text('title', 'My awesome title')} />}
      alignText={select('alignText', {
        left: 'left',
        center: 'center',
        right: 'right',
      }, 'left')}
    />
  </ThemeProvider>
);

const HeaderWithSubTitle = () => (
  <ThemeProvider theme={theme}>
    <Header
      alignText={select('alignText', {
        left: 'left',
        center: 'center',
        right: 'right',
      }, 'left')}
      title={<Title text={text('title', 'My awesome title')} />}
      subtitle={<Subtitle text={text('subtitle', 'Hoooray!')} />}
    />
  </ThemeProvider>
);

const HeaderWithThumbnail = () => (
  <ThemeProvider theme={theme}>
    <Header
      alignText={select('alignText', {
        left: 'left',
        center: 'center',
        right: 'right',
      }, 'left')}
      title={<Title text={text('title', 'My awesome title')} />}
      subtitle={<Subtitle text={text('subtitle', 'Hoooray!')} />}
      thumbnail={<Thumbnail image={text('thumbnail', 'https://camo.githubusercontent.com/82055944adc1659d8435e6d0187eaf71485f4d2d/687474703a2f2f6d656d65642e636f6d2e62722f7265736f75726365732f696d672f6c6f676f2e706e67')} />}
    />
  </ThemeProvider>
);

const HeaderWithIcon = () => (
  <ThemeProvider theme={theme}>
    <Header
      alignText={select('alignText', {
        left: 'left',
        center: 'center',
        right: 'right',
      }, 'left')}
      title={<Title text={text('title', 'My awesome title')} />}
      subtitle={<Subtitle text={text('subtitle', 'Hoooray!')} />}
      thumbnail={<Thumbnail image={text('thumbnail', 'https://camo.githubusercontent.com/82055944adc1659d8435e6d0187eaf71485f4d2d/687474703a2f2f6d656d65642e636f6d2e62722f7265736f75726365732f696d672f6c6f676f2e706e67')} />}
      icon={
        <Icon />
      }
    />
  </ThemeProvider>
);

const HeaderTitleWithDivider = () => (
  <ThemeProvider theme={theme}>
    <Header
      alignText={select('alignText', {
        left: 'left',
        center: 'center',
        right: 'right',
      }, 'left')}
      divider
      dividerColor={color('dividerColor', '#20afd6')}
      title={<Title text={text('title', 'My awesome title')} />}
    />
  </ThemeProvider>
);

stories
  .addDecorator(withDocs(readme))
  .add('only with title', HeaderOnlyWithTitle)
  .add('with subtitle', HeaderWithSubTitle)
  .add('with thumbnail', HeaderWithThumbnail)
  .add('with icon', HeaderWithIcon)
  .add('with divider title', HeaderTitleWithDivider);
