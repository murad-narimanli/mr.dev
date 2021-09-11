import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { az } from "./lang/az";
import { en } from "./lang/en";
import { ru } from "./lang/ru";
const resources = {
  az: {
    translation: az,
  },
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("locale") || "az",
    fallbackLng: "az",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
