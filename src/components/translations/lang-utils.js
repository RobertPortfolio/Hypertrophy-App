import translations from './translations';

export const translate = (key, lang, params = {}) => {
  let text = translations[lang][key] || key;

  Object.keys(params).forEach(param => {
    text = text.replace(`{${param}}`, params[param]);
  });

  return text;
};