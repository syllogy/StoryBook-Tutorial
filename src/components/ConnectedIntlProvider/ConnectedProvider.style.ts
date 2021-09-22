import styled from 'styled-components';
import { LanguageCode } from '../../services/i18n/intl';
import { fontFamily } from '../../stylesheet';

export const ChildrenContainer = styled.div<{ locale: LanguageCode }>`
  font-family: ${({ locale }) =>
    locale === LanguageCode.AR
      ? fontFamily.Almarai
      : fontFamily.Montserrat} !important;
`;
