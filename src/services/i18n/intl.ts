/* eslint-disable no-param-reassign */

import keys from 'lodash/keys';

export enum LanguageCode {
  AR = 'ar-MA',
  FR = 'fr-FR',
  EN = 'en-US',
}

export const DEFAULT_LANGUAGE_CODE = LanguageCode.EN;

export type LocaleDirection = 'rtl' | 'ltr';

export interface Language {
  locale: LanguageCode;
  label: string;
  direction: LocaleDirection;
}

export const LANGUAGES: {
  [key in LanguageCode]: Language;
} = {
  [LanguageCode.AR]: {
    locale: LanguageCode.AR,
    label: 'العربية',
    direction: 'rtl',
  },
  [LanguageCode.EN]: {
    locale: LanguageCode.EN,
    label: 'English',
    direction: 'ltr',
  },
  [LanguageCode.FR]: {
    locale: LanguageCode.FR,
    label: 'Français',
    direction: 'ltr',
  },
};

type Message = string | NestedDictionary;
interface NestedDictionary {
  [x: string]: Message;
}
interface FlattenedDictionary {
  [x: string]: string;
}

export const flattenMessages = (
  nestedMessages: NestedDictionary,
  prefix = ''
): FlattenedDictionary =>
  keys(nestedMessages).reduce((messages: FlattenedDictionary, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix.length !== 0 ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});

export async function loadLocaleData(locale: LanguageCode) {
  let localeData;
  switch (locale) {
    case LanguageCode.EN:
      localeData = await import('../../translations/en.json');
      break;
    case LanguageCode.FR:
      localeData = await import('../../translations/fr.json');
      break;
    default:
      localeData = await import('../../translations/ar.json');
      break;
  }
  return flattenMessages(localeData);
}
