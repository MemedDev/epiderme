<p align="center">
  <a href="http://memed.com.br" rel="noopener" target="_blank"><img width="150" src="http://memed.com.br/resources/img/logo.png" alt="Memed logo"></a></p>
</p>

<h1 align="center" color="#56CDDF">Epiderme</h1>

<div align="center">

[![Travis (.org)](https://img.shields.io/travis/MemedDev/epiderme.svg)](https://travis-ci.org/MemedDev/epiderme)
[![npm (scoped)](https://img.shields.io/npm/v/@memed-dev/epiderme.svg)](https://www.npmjs.com/package/@memed-dev/epiderme)
[![downloads](https://img.shields.io/npm/dm/@memed-dev/epiderme.svg)](http://npm-stat.com/charts.html?package=@memed-dev/epiderme&from=2015-08-01)
[![Codecov](https://img.shields.io/codecov/c/gh/MemedDev/epiderme.svg)](https://codecov.io/gh/MemedDev/epiderme)
[![GitHub](https://img.shields.io/github/license/MemedDev/epiderme.svg)](http://opensource.org/licenses/MIT)

</div>

## Instalation

Epiderme is available as an [npm package](https://www.npmjs.com/package/@memed-dev/epiderme).

To install you can use the `npm`.

```shell
npm install --save @memed-dev/epiderme
```

Epiderme is built on top of [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/), so you must have them installed on your project in order to use it.

You problably already have React but not styled-components, so:

```shell
npm install --save styled-components
```

## Usage

After the installation you will be able to start using it in your project.

Here's a quick example to get you started!

```jsx
// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, createTheme } from '@memed-dev/epiderme';

const App = (props) => (
  <div>
    <ThemeProvider theme={createTheme()}>
      <h1>My App Tilte</h1>
      <Button color="primary">Button</Button>
    </ThemeProvider>
  </div>
);

export default App;
```

## Customizations

You can also customize the color, font, spacing, shadows, and many other properties overiding our default theme.

This is how it looks like:

```javascript
{
  typography: {
    fontFamily: '"Atcarquette", "Helvetica", "Arial", sans-serif',
    fontSize: '16px',
    color: 'rgb(51, 51, 51)',
    body1: {
      fontSize: '16px',
      lineHeight: '22px',
      letterSpacing: '-0.2px'
    },
    caption1: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-0.1px'
    },
    subtitle2: {
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '-0.35px'
    },
    button: {
      fontSize: '16px',
      letterSpacing: '-0.2px',
      textTransform: 'none',
      fontWeight: 500
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  palette: {
    black: {
      default: 'rgb(51, 51, 51)',
      black50: 'rgba(51, 51, 51, 0.5)',
      black24: 'rgba(51, 51, 51, 0.24)',
      black12: 'rgba(51, 51, 51, 0.12)',
      black08: 'rgba(51, 51, 51, 0.08)'
    },
    default: {
      main: '#dedede',
      lighten: '#e5e5e5',
      darken: '#d0d0d0',
      text: 'rgb(51, 51, 51)'
    },
    primary: {
      main: '#00BCEB',
      lighten: '#00bbea',
      darken: '#00a3cc',
      text: 'white'
    },
    accent: {
      main: '#00d39c',
      lighten: '#00dba2',
      darken: '#00c693',
      text: 'white'
    }
  },
  unit: {
    space: 8,
    space2: 16,
    space3: 24,
    space4: 32,
    space5: 40,
    space6: 48,
    space7: 56,
    space8: 64,
    space9: 72,
    small: 4,
    extraSmall: 2
  },
  shadows: [
    'none',
    '0 3px 10px 0 rgba(0, 0, 0, 0.08)'
  ],
  borderRadius: {
    default: '6px'
  },
  icons: {
    sizes: {
      small: '16px',
      medium: '24px',
      large: '32px',
    },
  },
}
```

You can pass your custom theme object to the `createTheme` function provided by epiderme to create your own theme.
Your theme will be merged with our default theme, you don't need to override all properties, only those you want to customize.

```jsx
// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, createTheme } from '@memed-dev/epiderme';

// customizing the primary color of the theme
const myCustomTheme = createTheme({
  palette: {
    primary: {
      main: 'myAwesomePrimaryColor',
      lighten: 'myAwesomePrimaryColor',
      darken: 'myAwesomePrimaryColor',
      text: 'white',
    }
  }
});

const App = (props) => (
  <div>
    <ThemeProvider theme={createTheme(myCustomTheme)}>
      <h1>My App Tilte</h1>
      <Button color="primary">Button</Button>
    </ThemeProvider>
  </div>
);

export default App;
```

To see more components, check out our [StoryBook](https://memeddev.github.io/epiderme)
