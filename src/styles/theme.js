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
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemibold,
  fontWeightBold,
} from './variables';

const theme = {
  typography: {
    fontFamily: '"Atcarquette", "Helvetica", "Arial", sans-serif',
    fontSize: '16px',
    color: textColor,
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
    subtitle2: {
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '-0.35px',
    },
    button: {
      fontSize: '16px',
      letterSpacing: '-0.2px',
      textTransform: 'none',
      fontWeight: fontWeightMedium,
    },
    weights: {
      light: fontWeightLight,
      regular: fontWeightRegular,
      medium: fontWeightMedium,
      semibold: fontWeightSemibold,
      bold: fontWeightBold,
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
    small: '2px',
    base: '6px',
    large: '12px',
  },
  icons: {
    sizes: {
      small: '16px',
      medium: '24px',
      large: '32px',
    },
  },
};

export default (customTheme = {}) => deepmerge(
  theme,
  customTheme,
);
