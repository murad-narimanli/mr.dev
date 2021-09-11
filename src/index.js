import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/bootstrap.min.css'
import './Assets/css/animate.css'
import './Assets/css/animations.css'
import './Assets/css/owl.carousel.css'
import './Assets/css/magnific-popup.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss"
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './Assets/css/main.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router} from "react-router-dom";
import './i18n'
import store from "./redux/store";
import { Provider } from 'react-redux';
import history from './const/history';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}><App /></Router>
        </Provider>,
    </React.StrictMode>,
document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


