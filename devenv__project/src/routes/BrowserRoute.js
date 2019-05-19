/*eslint-disable*/
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AdminPage from '../pages/AdminPage';
import AdminCreateUsers from '../pages/AdminCreateUsers';
import AdminCreateSite from "../pages/AdminCreateSite";
import SalesDistributorPage from '../pages/SalesDistributorPage';
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
                <Route exact={true} path="/admin" component={AdminPage} />
                <Route exact={true} path="/admin/create-users" component={AdminCreateUsers} />
                <Route exact={true} path="/admin/create-site" component={AdminCreateSite} />
                <Route exact={true} path="/sales-distributor" component={SalesDistributorPage} />
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