import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Material/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import en from '../src/Material/lang/en.json';
import vn from '../src/Material/lang/vn.json';
import {Provider} from "react-redux";
import store from "./store";

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("lan") || "en",
    resources: {
        en: {
            common: en
        },
        fr: {
            common: vn
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <Provider store={store}>
                <App/>
            </Provider>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
