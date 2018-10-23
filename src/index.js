/* eslint-disable import/default */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom'
import MyRoute from './MyRoute';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';

import './assets/vendor/css/bootstrap.min.css';
import './assets/vendor/css/style.css';
import './assets/vendor/css/style-responsive.css';
import './assets/vendor/css/animate.min.css';
import './assets/vendor/css/vertical-rhythm.min.css';
import './assets/vendor/css/owl.carousel.css';
import './assets/vendor/css/magnific-popup.css';
import './assets/styles/mainstyles.css';

import './assets/vendor/js/jquery-1.11.2.min.js';
import './assets/vendor/js/jquery.easing.1.3.js';
import './assets/vendor/js/bootstrap.min.js';
import './assets/vendor/js/SmoothScroll.js';
import './assets/vendor/js/jquery.scrollTo.min.js';
import './assets/vendor/js/jquery.localScroll.min.js';
import './assets/vendor/js/jquery.viewport.mini.js';
import './assets/vendor/js/jquery.countTo.js';
import './assets/vendor/js/jquery.appear.js';
import './assets/vendor/js/jquery.sticky.js';
import './assets/vendor/js/jquery.parallax-1.1.3.js';
import './assets/vendor/js/jquery.fitvids.js';
import './assets/vendor/js/owl.carousel.min.js';
import './assets/vendor/js/isotope.pkgd.min.js';
import './assets/vendor/js/imagesloaded.pkgd.min.js';
import './assets/vendor/js/jquery.magnific-popup.min.js';

import './assets/vendor/js/gmap3.min.js';
import './assets/vendor/js/wow.min.js';
import './assets/vendor/js/masonry.pkgd.min.js';
import './assets/vendor/js/jquery.simple-text-rotator.min.js';
import './assets/vendor/js/all.js';
import './assets/vendor/js/contact-form.js';
import './assets/vendor/js/jquery.ajaxchimp.min.js';

const store = configureStore();

render(
    <Provider store={store}>
        <MyRoute />
    </Provider>,
    document.getElementById('app')
);
