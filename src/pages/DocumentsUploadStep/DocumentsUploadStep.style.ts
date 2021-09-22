import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import {
  colorPalette,
  down,
  fontSize,
  fontWeight,
  getSpacing,
} from "../../stylesheet";
import FormButtonUpload from "../../components/FormUploadButton";
import Button from "../../components/Button";

export const DocumentsStepContainer = styled.div`
  padding: ${getSpacing(2)};
`;
DocumentsStepContainer.displayName = "DocumentsStepContainer";

export const DocumentsStepTitle = styled.h3`
  text-align: start;
  line-height: 1.17;
  font-size: ${fontSize.XMedium};
  color: ${colorPalette.primary};
  margin-bottom: ${getSpacing(3)};
  font-weight: ${fontWeight.bold};
`;
DocumentsStepTitle.displayName = "DocumentsStepTitle";

export const FileInput = styled(FormButtonUpload)`
  margin-bottom: ${getSpacing(3)};
  & .MuiButtonBase-root {
    border-color: ${(props: { error?: boolean }) =>
      props.error ? colorPalette.redDeadRedumption : "currentColor"};
  }
`;
FileInput.displayName = "FileInput";

export const Spinner = styled(CircularProgress)`
  && {
    color: ${colorPalette.primary};
    margin-inline-start: ${getSpacing(0.5)};
  }
`;
Spinner.displayName = "Spinner";

export const StepButtonContainer = styled.div`
  width: 100%;
  margin: ${getSpacing(3, 0, 2.5)};
  ${down("tablet")} {
    display: flex;
    flex-direction: column;
  }
`;

export const CancelButton = styled(Button)`
  && {
    box-shadow: none;
    background-color: rgba(127, 126, 148, 0.16);
    color: ${colorPalette.waterloo};
    width: 25%;
    margin-inline-start: ${getSpacing(1.5)};
    &:hover {
      box-shadow: none;
    }
    ${down("tablet")} {
      width: 100%;
      margin: ${getSpacing(2, 0, 0)};
    }
  }
`;
export const NextStepButton = styled(Button)`
  && {
    background-color: ${({ isDisabled }) =>
      isDisabled ? colorPalette.silver : colorPalette.primary} !important;
    border-color: inherit;
    color: ${colorPalette.white} !important;
    width: calc(50% - ${getSpacing(2.5)});

    &:hover {
      background-color: ${colorPalette.primary};
      color: ${colorPalette.white};
    }
    ${down("tablet")} {
      width: 100%;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
