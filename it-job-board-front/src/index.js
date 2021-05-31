import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Material/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import en from '../src/Material/lang/en.json';
import fr from '../src/Material/lang/fr.json'

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("lan") || "en",
    resources: {
        en: {
            common: en
        },
        fr: {
            common: fr
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
