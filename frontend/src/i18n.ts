import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: 'en',
        lng: localStorage.getItem('language') || 'et',
        react: {
            transSupportBasicHtmlNodes: true,
            useSuspense: true
        }
    }, (error) => {
        if (error) console.error("Error="+error);
    })

export default i18n;