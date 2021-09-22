/* eslint-disable @typescript-eslint/naming-convention */

import { down as _down, up as _up } from 'styled-breakpoints';
import { LanguageCode } from './services/i18n/intl';

/**
 * App spacing measurement convention
 * Use the getSpacing function below to compute padding and margin
 */
const SPACING_UNIT = 10;
const MEASUREMENT_UNIT = 'px';

export const colorPalette = {
  'lightBlack': '#a7a8b5',
  'black': '#000000',
  'white': '#ffffff',
  'white-40': '#7e7e7e',
  'white-60': '#a9a9a9',
  'white-70': '#bebebe',
  'white-80': '#d4d4d4',
  'white-90': '#e9e9e9',
  'lightGrey': '#f0f0f2',
  'sunGrey': '#e7e7e7',
  'lightGreen': '#eafaf3',
  'mediumGrey': '#677279',
  'darkGrey': '#222222',
  'dustyGrey': '#979797',
  'gullGrey': '#9FAFB9',
  'primary': '#51c4d3',
  'secondary': '#126e82',
  'paleGrey': '#8ab6d6',
  'athensGray': '#eaeaf0',
  'bermuda': '#64e2c2',
  'alto': '#e0e0e0',
  'bermudaLight': '#86dcbe',
  'bermudaLightest': '#a1e4cd',
  'stratosLight': '#1a1c44',
  'bermudaLighter': '#93e0c5',
  'stratosLightest': '#4d4f6d',
  'stratosLighter': '#343559',
  'doveGrayLightest': '#666666',
  'doveGrayLight': '#e6e6e6',
  'alabaster': '#fcfcfc',
  'doveGrayLighter': '#939393',
  'bermudaDark': '#5acbaf',
  'bermudaDarker': '#50b59b',
  'stratos': '#01032F',
  'stratosDarker': '#00010e',
  'stratosDark': '#00011a',
  'bermudaDarkest': '#469e88',
  'red': '#FF7373',
  'mirage': '#1B1D2F',
  'comet': '#575B7A',
  'clay': '#262839',
  'abbey': '#4B555A',
  'dawnPink': '#f3e5e4',
  'frostedMint': '#dbfefb',
  'pantone': '#c3e1de',
  'blackTransparent': 'rgba(0, 0, 0, 0.24)',
  'blackExtraTransparent': 'rgba(0, 0, 0, 0.04)',
  'greenMedium': 'rgba(120, 216, 183, 0.55)',
  'blackHaze': '#F6F8F7',
  'wildSand': '#F5F5F5',
  'ghostWhite': '#f8f8fb',
  'altoGray': '#D5D5D5',
  'bombay': '#afb6bb',
  'grayNurse': '#FAFBFA',
  'silver': '#B8B8B8',
  'Alabaster1': '#f8f8f8',
  'plantation': '#285a4e',
  'whiteSmoke': '#fff1f0',
  'paleCyan': '#c2f0ec',
  'amethystSmoke': '#9090a4',
  'martinique': '#343559',
  'waterloo': '#7f7e94',
  'yellowOrange': '#ff984c',
  'catSkillWhite': '#f7f9fb',
  'mischka': '#d8d8df',
  'athens': '#fafbfc',
  'pomegranate': '#f44336',
  'grayChateau': '#a2a7aa',
  'redDeadRedumption': '#e00b3f',
  'santasGrey': '#a0a2b5',
  'mineShaft': '#212121',
  'spunPearl': '#A6A6B0',
};

export const fontFamily = {
  Montserrat: 'Montserrat',
  Almarai: 'Almarai',
};

export const fontSize = {
  XXXLarge: '60px',
  XXLarge: '42px',
  XLarge: '34px',
  MLarge: '32px',
  large: '24px',
  XXXMedium: '22px',
  XXMedium: '20px',
  XMedium: '18px',
  medium: '16px',
  small: '14px',
  Xsmall: '13px',
  XXsmall: '12px',
};

export const fontWeight = {
  xBold: '800',
  bold: '700',
  medium: '600',
  normal: '400',
  light: '300',
};

export const lineHeight = {
  XXlarge: '60px',
  Xlarge: '50px',
  large: '36px',
  medium: '24px',
  small: '13px',
};

export const borderRadius = {
  XXlarge: '22px',
  Xlarge: '20px',
  large: '16px',
  medium: '8px',
  small: '4px',
};

export const letterSpacing = {
  none: 0,
  small: '0.1px',
};

export const { down, up } = (function breakpoints() {
  type resolutions = 'mobile' | 'tablet' | 'laptop';
  const DOWNS: { [key in resolutions]: ReturnType<typeof _down> } = {
    mobile: _down('xs'),
    tablet: _down('sm'),
    laptop: _down('md'),
  };
  const UPS: { [key in resolutions]: ReturnType<typeof _up> } = {
    mobile: _up('sm'),
    tablet: _up('md'),
    laptop: _up('lg'),
  };

  const downGetter = (bp: resolutions) => {
    return DOWNS[bp];
  };
  const upGetter = (bp: resolutions) => {
    return UPS[bp];
  };

  return {
    down: downGetter,
    up: upGetter,
  };
})();

const defaultTheme = {
  breakpoints: {
    xs: '0px',
    sm: '577px',
    md: '769px',
    lg: '1025px',
  },
  fontFamily: {
    main: fontFamily.Almarai,
  },
};
export type AppTheme = typeof defaultTheme;

export const getAppTheme = (locale: LanguageCode): AppTheme => {
  return {
    ...defaultTheme,
    fontFamily: {
      main:
        locale === LanguageCode.AR ? fontFamily.Almarai : fontFamily.Montserrat,
    },
  };
};

export const getSpacing = (multiplier1: number, ...rest: number[]): string => {
  if (rest.length > 3) {
    throw new Error('A max of three parameters are allowed.');
  }

  let spacing = `${multiplier1 * SPACING_UNIT}${MEASUREMENT_UNIT}`;

  rest.forEach((multiplier) => {
    spacing = `${spacing} ${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;
  });

  return spacing;
};
