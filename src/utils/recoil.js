import { atom } from "recoil";

export const selectedLang = atom({
    key: 'selectedLang', 
    default: { name: 'English', code: 'en' }, 
  });