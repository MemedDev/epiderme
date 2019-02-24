import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <div>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
    </div>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('with custom theme', () => {
    const custom = {
      default: '#aaa',
      primary: 'purple',
      success: 'green',
      danger: 'red',
      warning: 'orange',
      info: 'blue',
    };

    return (
      <ThemeProvider theme={custom}>
        <div>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
        </div>
      </ThemeProvider>
    );
  });
