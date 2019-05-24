/*eslint-disable*/
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import AdminPage from '../pages/AdminPage';

import AdminCreateUsers from '../pages/AdminCreateUsers';
import AdminCreateSite from "../pages/AdminCreateSite";
import AdminViewOrdersPage from '../pages/AdminViewOrdersPage';
import AdminViewUsersProfilesPage from '../pages/AdminViewUsersProfilesPage';
import AdminUpdateUsersPage from '../pages/AdminUpdateUsersPage';

import SalesDistributorPage from '../pages/SalesDistributorPage';
import SalesDistributorCreateOrderPage from '../pages/SalesDistributorCreateOrderPage';
import InboundGateOfficerPage from '../pages/InboundGateOfficerPage';
import MainTicket from '../pages/MainTicket';
import WarehouseLoaderPage from '../pages/WarehouseLoaderPage';
import WarehouseDispatcherPage from "../pages/WarehouseDispatcherPage";
import AuditorPage from "../pages/AuditorPage";
// import ExternalAuditor from '../pages/ExternalAuditor';
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
                <Route exact={true} path="/admin/view-orders" component={AdminViewOrdersPage} />
                <Route exact={true} path="/admin/view-users" component={AdminViewUsersProfilesPage} />
                <Route exact={true} path="/admin/update-user/:id" component={AdminUpdateUsersPage} />
                <Route exact={true} path="/sales-distributor" component={SalesDistributorPage} />
                <Route exact={true} path="/sales-distributor/create-order" component={SalesDistributorCreateOrderPage} />
                <Route exact={true} path="/inbound-gate-officer" component={InboundGateOfficerPage} />
                <Route exact={true} path="/main-ticket" component={MainTicket} />
                <Route exact={true} path="/warehouse-loader" component={WarehouseLoaderPage} />
                <Route exact={true} path="/warehouse-dispatcher" component={WarehouseDispatcherPage} />
                <Route exact={true} path="/external-auditor" component={AuditorPage} />
                {/* <Route exact={true} path="/external-audior" component={ExternalAuditor} /> */}
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