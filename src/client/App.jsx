import React from "react";
import { withRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom';

import * as ROUTES from './utils/routes.js'

import { AuthConsumer, ProtectedRoute } from './layers/AuthLayer.jsx';

import DashboardPage from './pages/Dashboard.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

class App extends React.Component {

    render() {
       return (
         <div>
             <AuthConsumer>
                {({authenticated, login}) => (
                  <Switch>
                      <Route exact path={ROUTES.LANDING} component={LandingPage} />
                      <Route path={ROUTES.LOGIN} component={() => (<LoginPage login={login} authenticated={authenticated} /> )} />
                      <Route path={ROUTES.SIGN_UP} component={SignupPage} />
                      
                      {/* Protected Routes that need authentication */}
                      <ProtectedRoute path={ROUTES.DASHBOARD} component={DashboardPage} authenticated={authenticated}/>
                  </Switch>
                )}
            </AuthConsumer>
         </div>
       )
    }
}

export default App;