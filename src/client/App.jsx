import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from './utils/routes.js';

import { AuthConsumer, ProtectedRoute } from './layers/AuthLayer.jsx';

import DashboardPage from './pages/Dashboard.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import PasswordForget from './pages/PasswordForget.jsx';
import NavigationBar from './components/common/Navbar.jsx';
import CookiesToast from './components/common/CookiesToast.jsx';

import Cookies from './components/landing/CookiesPolicy.jsx';
import Privacy from './components/landing/PrivacyPolicy.jsx';
import Terms from './components/landing/TermsOfService.jsx';
import LinuxInstructions from './components/landing/LinuxInstructions.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/components/common/Theme.less';

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {({ authenticated, login }) => (
            <>
              <NavigationBar />
              <Switch>
                <Route
                  exact
                  path={ROUTES.LANDING}
                  component={() => (
                    <LandingPage authenticated={authenticated} />
                  )}
                />
                <Route
                  path={ROUTES.LOGIN}
                  component={() => (
                    <LoginPage login={login} authenticated={authenticated} />
                  )}
                />
                <Route path={ROUTES.SIGN_UP} component={SignupPage} />
                <Route
                  path={ROUTES.PASSWORD_FORGET}
                  component={PasswordForget}
                />
                <Route path={ROUTES.COOKIES} component={Cookies} />
                <Route path={ROUTES.PRIVACY} component={Privacy} />
                <Route path={ROUTES.TERMS} component={Terms} />
                <Route path={ROUTES.LINUX} component={LinuxInstructions} />
                {/* Protected Routes that need authentication */}
                <ProtectedRoute
                  path={ROUTES.DASHBOARD}
                  component={DashboardPage}
                  authenticated={authenticated}
                />
              </Switch>
              <CookiesToast />
            </>
          )}
        </AuthConsumer>
      </div>
    );
  }
}

export default App;
