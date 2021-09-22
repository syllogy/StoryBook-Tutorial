/* eslint-disable react/self-closing-comp */

import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';
import langageContext from '../../context/langage-context';
import {
  DEFAULT_LANGUAGE_CODE,
  flattenMessages,
  LanguageCode,
  LANGUAGES,
  loadLocaleData,
} from '../../services/i18n/intl';
import enData from '../../translations/en.json';
import { ChildrenContainer } from './ConnectedProvider.style';

const ConnectedIntlProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [locale, setLocale] = useState(DEFAULT_LANGUAGE_CODE);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(flattenMessages(enData));

  const changeLocaleHandler = (newLocale: LanguageCode) => {
    if (newLocale !== locale) {
      setLoading(true);
      setLocale(newLocale);
    }
  };

  useEffect(() => {
    async function loadLocale() {
      setLoading(false);
      const newMessages = await loadLocaleData(locale);
      setMessages(newMessages);
    }
    loadLocale();
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <langageContext.Provider
        value={{
          ...LANGUAGES[locale],
          changeLocaleHandler,
        }}
      >
        <Helmet>
          <html lang={locale} dir={LANGUAGES[locale].direction}></html>
        </Helmet>
        {loading ? (
          <div>loading ........ </div>
        ) : (
          <ChildrenContainer locale={locale}>{children}</ChildrenContainer>
        )}
      </langageContext.Provider>
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
