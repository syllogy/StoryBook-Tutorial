import { Button, CircularProgress } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { LocaleDirection } from '../../services/i18n/intl';
import {
  down,
  borderRadius,
  fontWeight,
  getSpacing,
  fontSize,
  colorPalette,
} from '../../stylesheet';
import { ButtonType } from './Button';

const getStyledButton = (type: ButtonType, direction?: LocaleDirection) => {
  switch (type) {
    case ButtonType.GO_BACK:
      return css`
        padding: ${getSpacing(0.6, 1.8)};
        background-color: ${colorPalette.pantone};
        font-size: ${fontSize.small};
        line-height: 1;
        border-radius: ${borderRadius.large};
        color: ${colorPalette.stratos};
        & .MuiButton-startIcon.MuiButton-iconSizeSmall {
          margin-right: ${getSpacing(0)};
          margin-left: ${getSpacing(0)};
          margin-inline-end: ${getSpacing(1)};
          ${direction === 'ltr' && `transform: rotate(-180deg)`};
        }
        &:hover {
          background-color: ${colorPalette.pantone};
        }
      `;
    case ButtonType.CANCEL:
      return css`
        padding: ${getSpacing(1.5)} ${getSpacing(6.5)};
        background-color: ${colorPalette.white};
        font-size: ${fontSize.medium};
        border-radius: ${borderRadius.XXlarge};
        line-height: 0.94;
        color: ${colorPalette.primary};
        font-weight: ${fontWeight.bold};
        box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.25);
        &.Mui-disabled {
          color: ${colorPalette.primary};
          background-color: ${colorPalette.paleGrey};
        }
        &.MuiButton-outlined {
          border-width: ${getSpacing(0.2)};
        }
      `;
    case ButtonType.FILLED:
      return css`
        padding: ${getSpacing(0.7, 1.5)};
        background-color: ${colorPalette.white};
        font-size: ${fontSize.small};
        border-radius: ${borderRadius.Xlarge};
        color: ${colorPalette.primary};
        font-weight: ${fontWeight.bold};
        border: solid 1px ${colorPalette.primary};
        box-shadow: none;
        white-space: nowrap;
        overflow: hidden;
        & .MuiButton-label .MuiButton-startIcon {
          margin-inline-start: ${getSpacing(0)};
          margin-inline-end: ${getSpacing(0.5)};
        }
        & .MuiButton-label .MuiButton-endIcon {
          margin-inline-end: ${getSpacing(0)};
          margin-inline-start: ${getSpacing(0.5)};
        }
        &:hover {
          background-color: ${colorPalette.white};
          box-shadow: none;
        }
        ${down('tablet')} {
          width: 100%;
        }
      `;
    case ButtonType.TRANSPARENT:
      return css`
        padding: ${getSpacing(0.7, 1.5)};
        background-color: ${colorPalette.primary};
        font-size: ${fontSize.small};
        border-radius: ${borderRadius.Xlarge};
        color: ${colorPalette.white};
        font-weight: ${fontWeight.bold};
        border: solid 1px ${colorPalette.white};
        box-shadow: none;
        white-space: nowrap;
        overflow: hidden;
        & .MuiButton-label .MuiButton-startIcon {
          margin-inline-start: ${getSpacing(0)};
          margin-inline-end: ${getSpacing(0.5)};
        }
        & .MuiButton-label .MuiButton-endIcon {
          margin-inline-end: ${getSpacing(0)};
          margin-inline-start: ${getSpacing(0.5)};
        }
        &:hover {
          background-color: ${colorPalette.primary};
          box-shadow: none;
        }
        ${down('tablet')} {
          width: 100%;
        }
      `;
    default:
      return css`
        padding: ${getSpacing(1.5)} ${getSpacing(6.5)};
        background-color: ${colorPalette.primary};
        font-size: ${fontSize.medium};
        border-radius: ${borderRadius.XXlarge};
        line-height: 0.94;
        color: ${colorPalette.white};
        font-weight: ${fontWeight.bold};
        box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.25);
        &:hover {
          background-color: ${colorPalette.primary};
          box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.25);
        }
        &.Mui-disabled {
          color: ${colorPalette.primary};
          background-color: ${colorPalette.paleGrey};
        }
        &.MuiButton-outlined {
          border-width: ${getSpacing(0.2)};
        }
      `;
  }
};

interface ButtonProps {
  buttontype: ButtonType;
  direction?: LocaleDirection;
}

export const BaseButton = styled(Button)<ButtonProps>`
  && {
    ${({ buttontype, direction }: ButtonProps) =>
      getStyledButton(buttontype, direction)};
    text-align: center;
    text-transform: none;
    ${down('mobile')} {
      padding: ${getSpacing(1.2)} ${getSpacing(5.5)};
    }
  }
`;

export const Spinner = styled(CircularProgress)`
  && {
    color: ${colorPalette.primary};
  }
`;
Spinner.displayName = 'Spinner';
