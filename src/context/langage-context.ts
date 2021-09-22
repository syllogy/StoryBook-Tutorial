import React from 'react';
import { DEFAULT_LANGUAGE_CODE, LanguageCode } from '../services/i18n/intl';

const langageContext = React.createContext({
  locale: DEFAULT_LANGUAGE_CODE,
  label: 'Francais',
  direction: 'rtl',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeLocaleHandler: (newLocale: LanguageCode) => {},
});

export default langageContext;
