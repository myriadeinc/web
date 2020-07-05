import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

import AuthLayer from './layers/AuthLayer.jsx'
import ErrorBoundaryLayer from './layers/ErrorLayer.jsx'
import App from './App.jsx'
import './styles/shards/shards.scss'

const trackingId = 'UA-154698655-1'
ReactGA.initialize(trackingId)

const history = createBrowserHistory()
// Initialize google analytics page view tracking
history.listen((location) => {
    ReactGA.set({ page: location.pathname }) // Update the user's current page
    ReactGA.pageview(location.pathname) // Record a pageview for the given page
})

const wrapper = document.getElementById('main')
wrapper
    ? ReactDOM.render(
          <Router>
              <ErrorBoundaryLayer>
                  <AuthLayer>
                      <App />
                  </AuthLayer>
              </ErrorBoundaryLayer>
          </Router>,
          wrapper
      )
    : false
