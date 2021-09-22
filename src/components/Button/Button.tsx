import React, { MouseEvent } from "react";
import { BaseButton, Spinner } from "./Button.style";
import { LocaleDirection } from "../../services/i18n/intl";

export interface Props {
  className?: string;
  buttonType: ButtonType;
  text: string;
  onClick?: (e: MouseEvent) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  direction?: LocaleDirection;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export enum ButtonType {
  SUBMIT = "SUBMIT",
  CANCEL = "CANCEL",
  GO_BACK = "GO_BACK",
  FILLED = "FILLED",
  TRANSPARENT = "TRANSPARENT",
}

// eslint-disable-next-line complexity
const Button: React.FunctionComponent<Props> = ({
  className,
  buttonType,
  text,
  onClick,
  isDisabled,
  isLoading,
  type,
  direction,
  startIcon,
  endIcon,
}) => {
  return (
    <BaseButton
      className={className}
      buttontype={buttonType}
      variant="contained"
      size="small"
      type={type || "submit"}
      onClick={onClick}
      disabled={isDisabled}
      direction={direction}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {isLoading ? <Spinner size={20} /> : <span>{text}</span>}
    </BaseButton>
  );
};

export default Button;
