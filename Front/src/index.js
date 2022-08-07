
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import AppRouter from "./router/index"
import {useTranslation,initReactI18next} from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend"
import {Provider} from "react-redux"
import store from "./redux/store"
import "./index.css"


i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
    fallbackLng:"en",
    detection:{
      order: ['cookie','htmlTag','localStorage','path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{
      useSuspense:false
    }
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
