import deepmerge from 'deepmerge';

import {
  black,
  black50,
  black24,
  black12,
  black08,
  defaultColor,
  defaultColorLighten,
  defaultColorDarken,
  primary,
  primaryLighten,
  primaryDarken,
  accent,
  accentLighten,
  accentDarken,
  textColor,
  unit,
} from './variables';

const theme = {
  typography: {
    fontFamily: '"Atcarquette", "Helvetica", "Arial", sans-serif',
    fontSize: '16px',
    color: textColor,
    subtitle2: {
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '-0.35px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '22px',
      letterSpacing: '-0.2px',
    },
    caption1: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-0.1px',
    },
    button: {
      fontSize: '16px',
      letterSpacing: '-0.2px',
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  palette: {
    black: {
      default: black,
      black50,
      black24,
      black12,
      black08,
    },
    default: {
      main: defaultColor,
      lighten: defaultColorLighten,
      darken: defaultColorDarken,
      text: textColor,
    },
    primary: {
      main: primary,
      lighten: primaryLighten,
      darken: primaryDarken,
      text: 'white',
    },
    accent: {
      main: accent,
      lighten: accentLighten,
      darken: accentDarken,
      text: 'white',
    },
  },
  unit: {
    space: unit,
    space2: unit * 2,
    space3: unit * 3,
    space4: unit * 4,
    space5: unit * 5,
    space6: unit * 6,
    space7: unit * 7,
    space8: unit * 8,
    space9: unit * 9,
    small: unit / 2,
    extraSmall: unit / 2 / 2,
  },
  shadows: [
    'none',
    '0 3px 10px 0 rgba(0, 0, 0, 0.08)',
  ],
  borderRadius: {
    default: '6px',
  },
};

export default (customTheme = {}) => deepmerge(
  theme,
  customTheme,
);
