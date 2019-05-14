import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
// import AdministrationPage from "../pages/AdministrationPage";
// import RegisterPage from "../pages/RegisterPage";
// import DashboardPage from '../pages/DashboardPage';

class BrowserRoute extends Component {
  render() {
    return (
      <div className="browser__route">
        <BrowserRouter>
            <Switch>
                <Redirect exact={true} from="/" to="/login" />
                <Route path="/login" component={LoginPage} />
                {/* <Route exact={true} path="/administration" component={AdministrationPage} />
                <Route exact={true} path="/administration/register" component={RegisterPage} />
                <Route exact={true} path="/dashboard" component={DashboardPage} /> */}
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BrowserRoute;