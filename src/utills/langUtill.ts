import { NextRouter } from 'next/router';

const baseLang = {
  th: 'th',
  en: 'en',
};

const langWImages = [
  {
    lang: baseLang.en,
    flag: '/static/images/flages/en.png',
  },
  {
    lang: baseLang.th,
    flag: '/static/images/flages/th.png',
  },
];

const handleValidLang = (lang: any) => {
  switch (lang) {
    case baseLang.en:
      return baseLang.en;
    case baseLang.th:
      return baseLang.th;
    default:
      return baseLang.th;
  }
};

const setLang = (newLang = '', router: NextRouter) => {
  const lang =
    typeof window !== 'undefined' ? localStorage.getItem('lang') : '';
  const langValid = handleValidLang(lang);
  if (langValid !== newLang) {
    localStorage.setItem('lang', newLang);
    router.push(router.asPath, router.asPath, { locale: newLang });
  }
};

const initLang = (router: NextRouter) => {
  const routeLang = router.locale;
  const lang =
    typeof window !== 'undefined' ? localStorage.getItem('lang') : '';
  const langValid = handleValidLang(lang);
  if (routeLang !== langValid) {
    router.push(router.asPath, router.asPath, {
      locale: routeLang,
      shallow: true,
    });
  }
};

export { baseLang, setLang, initLang, langWImages };
