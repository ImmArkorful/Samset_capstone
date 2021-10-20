// export const TEST_URL = "https://estic-backend.herokuapp.com";
export const TEST_URL = "http://192.168.151.173:3000";

export const SEARCH_MIN_PRICE = 1;
export const SEARCH_MAX_PRICE = 4000000;
export const SEARCH_MIN_SIZE = 1;
export const SEARCH_MAX_SIZE = 1000;

export const ADDITIONAL_FEATURES_SEPARATOR_CHARACTER = ",";

export const LANGUAGES = [
  {
    lang: "en",
    isRTL: false,
  },
  {
    lang: "tr",
    isRTL: false,
  },
  {
    lang: "ar",
    isRTL: true,
  },
];

export const getLang = (lang) => {
  const foundLang = LANGUAGES.find((a) => a.lang === lang);
  if (foundLang) {
    return foundLang;
  }
  return {
    lang: "en",
    isRTL: false,
  };
};
