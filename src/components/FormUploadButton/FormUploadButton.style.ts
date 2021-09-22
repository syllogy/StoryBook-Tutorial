import { Button, IconButton, CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import {
  borderRadius,
  getSpacing,
  fontSize,
  colorPalette,
} from "../../stylesheet";

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
`;
FileInputContainer.displayName = "FileInputContainer";

interface ButtonProps {
  component?: string;
  uploaded: boolean;
}

export const UploadButton = styled(Button)<ButtonProps>`
  && {
    flex: 1;
    text-transform: none;
    background-color: ${colorPalette.white};
    font-size: ${fontSize.medium};
    border-radius: ${borderRadius.small};
    color: ${colorPalette.waterloo};
    border: solid 1px ${colorPalette.mischka};
    box-shadow: none;
    width: 100%;
    text-align: start;
    padding: 0;
    justify-content: space-between;

    & .MuiButton-endIcon {
      margin: 0;
      padding: ${({ uploaded }) =>
        uploaded ? getSpacing(0, 0) : getSpacing(1.5, 0)};
      padding-inline-end: ${({ uploaded }) =>
        uploaded ? getSpacing(0) : getSpacing(2)};
    }
    &:hover {
      background-color: ${colorPalette.white};
      box-shadow: none;
    }
  }
`;

export const TextContainer = styled.div<ButtonProps>`
  padding: ${({ uploaded }) =>
    uploaded ? getSpacing(0, 0) : getSpacing(1.5, 0)};
  padding-inline-start: ${getSpacing(2)};
  & .button-typohraphy {
    display: block;
  }
  & .button-label {
    display: ${({ uploaded }) => (uploaded ? "block" : "none")};
    opacity: 0.7;
    font-size: ${fontSize.XXsmall};
    color: ${colorPalette.waterloo};
  }
`;

export const DeleteButton = styled(IconButton)`
  && {
    color: ${colorPalette.redDeadRedumption};
    margin-inline-start: ${getSpacing(0.5)};
  }
`;

export const Spinner = styled(CircularProgress)`
  && {
    color: ${colorPalette.primary};
    margin-inline-start: ${getSpacing(0.5)};
  }
`;
Spinner.displayName = "Spinner";
