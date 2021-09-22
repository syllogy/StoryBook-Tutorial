import React from "react";
import { KeyboardArrowDown } from "@material-ui/icons";
import {
  DropDownButtonContainer,
  DropDownListItemText,
  DropDownFilterMenu,
  DropDownMenuItem,
  ButtonTypographie,
} from "./DropDownFilter.style";
import { Language, LanguageCode } from "../../services/i18n/intl";

interface Props {
  options: Array<Language>;
  filter: LanguageCode;
  handleChange: (value: LanguageCode) => void;
  placeholder: string;
}

const DropDownFilter: React.FunctionComponent<Props> = ({
  options,
  filter,
  handleChange,
  placeholder,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectFilter = (choosenFilter: LanguageCode) => {
    handleChange(choosenFilter);
    handleClose();
  };

  const getFilterLabel = (filterValue: LanguageCode | null) => {
    return options.find((option) => option.locale === filterValue)?.label;
  };

  return (
    <>
      <DropDownButtonContainer
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        <ButtonTypographie noWrap>
          {filter ? getFilterLabel(filter) : placeholder}
        </ButtonTypographie>
      </DropDownButtonContainer>
      <DropDownFilterMenu
        id="dropdown-filter-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
      >
        {options.map((option) => (
          <DropDownMenuItem
            key={option.locale}
            selected={filter === option.locale}
            onClick={() => handleSelectFilter(option.locale)}
          >
            <DropDownListItemText primary={option.label} />
          </DropDownMenuItem>
        ))}
      </DropDownFilterMenu>
    </>
  );
};
export default DropDownFilter;
