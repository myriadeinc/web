import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import AuthLayer from './layers/AuthLayer.jsx';
import ErrorBoundaryLayer from './layers/ErrorLayer.jsx';
import App from './App.jsx';
import "./styles/shards/shards.scss";

library.add(fas);

const wrapper = document.getElementById('main');
wrapper ? ReactDOM.render((
    <Router>
        <ErrorBoundaryLayer>
            <AuthLayer>
                <App />
            </AuthLayer>
        </ErrorBoundaryLayer>
    </Router>
), wrapper) : false;
