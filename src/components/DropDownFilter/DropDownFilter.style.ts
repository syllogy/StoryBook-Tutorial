import {
  Button,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import {
  borderRadius,
  colorPalette,
  fontSize,
  getSpacing,
  fontWeight,
} from '../../stylesheet';

export const DropDownButtonContainer = styled(Button)`
  && {
    color: ${colorPalette.primary};
    border: solid 1px ${colorPalette.primary};
    width: ${getSpacing(16.5)};
    border-radius: ${getSpacing(2.5)};
    padding: ${getSpacing(0.8, 1.8)};
    &:hover {
      color: ${colorPalette.white};
      background-color: ${colorPalette.primary};
    }

    & .MuiButton-endIcon {
      margin-left: 0;
      margin-right: 0;
    }
    & svg {
      margin-inline-start: ${getSpacing(3)};
    }

    & .MuiButton-label {
      display: flex;
      justify-content: space-between;
    }

    &:not(:first-child) {
      margin-inline-start: ${getSpacing(1)};
    }
  }
`;

export const ButtonTypographie = styled(Typography)`
  && {
    font-size: ${fontSize.small};
    font-weight: ${fontWeight.bold};
  }
`;

export const DropDownFilterMenu = styled(Menu).attrs(() => ({
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
}))`
  & > .MuiPaper-root {
    direction: ltr;
    min-width: ${getSpacing(32.5)};
    max-height: ${getSpacing(30)};
    margin-top: ${getSpacing(1)};
    &::-webkit-scrollbar-track {
      background: ${colorPalette.white};
    }
    &::-webkit-scrollbar {
      width: ${getSpacing(0.5)};
      height: ${getSpacing(4)};
    }
    &::-webkit-scrollbar-thumb {
      background: ${colorPalette['white-70']};
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${colorPalette['white-60']};
    }

    & > ul.MuiMenu-list {
      width: auto !important;
      margin-top: ${getSpacing(0.8)};
      background-color: ${colorPalette.white};
      border-radius: ${borderRadius.medium};
      padding-inline-start: 0 !important;
    }
  }
`;

export const DropDownMenuItem = styled(MenuItem)`
  && {
    padding: ${getSpacing(0.6, 1.5)};

    &:focus,
    &.Mui-selected:focus {
      background-color: ${colorPalette.paleGrey};
      & .MuiListItemText-primary {
        font-weight: ${fontWeight.bold};
        color: ${colorPalette.white};
      }
    }
  }
`;

export const DropDownListItemText = styled(ListItemText)`
  && {
    color: ${colorPalette.mediumGrey};
    & span.MuiListItemText-primary {
      font-size: ${fontSize.medium};
      text-align: start;
    }
  }
`;
