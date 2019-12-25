import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import AuthLayer from './layers/AuthLayer.jsx';
import ErrorBoundaryLayer from './layers/ErrorLayer.jsx';
import App from './App.jsx';
import "./styles/shards/shards.scss";

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
