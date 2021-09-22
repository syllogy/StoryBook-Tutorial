import styled from 'styled-components';
import { colorPalette, fontSize, getSpacing } from '../../../stylesheet';

export const IconContainer = styled.div`
  padding: ${getSpacing(0.4, 2)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colorPalette.primary};
  & svg {
    color: white;
  }
`;

export const IconText = styled.span`
  display: block;
  font-size: ${fontSize.small};
  font-weight: bold;
  text-align: center;
  color: white;
`;
