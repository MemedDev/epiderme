import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ThemeProvider } from '@material-ui/styles';
import epidermeTheme from '../src/theme/epiderme';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


function Epiderme() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={epidermeTheme}>
      <Button variant="contained" color="primary" className={classes.button}>Primary</Button>
      <Button variant="contained" color="secondary" className={classes.button}>Secondary</Button>
    </ThemeProvider>
  );
}

storiesOf('Button', module)
  .add('Epiderme button', () => (
    <Epiderme />
  ));
