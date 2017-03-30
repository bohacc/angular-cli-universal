import {InjectionToken, OpaqueToken} from '@angular/core';

// import translations
import { LANG_CS_NAME, LANG_CS_TRANS } from './lang-cs';
import { LANG_DE_NAME, LANG_DE_TRANS } from './lang-de';

// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all translations, EXIST SERVER SIDE TRANSLATE !!!
export const dictionary = {
  CZ: LANG_CS_TRANS,
  DE: LANG_DE_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary },
];
