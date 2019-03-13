import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageLogin from '../pages/PageLogin';
import PageRegister from '../pages/PageRegister';
import PageProducts from '../pages/PageProducts';
import PageAdmin from "../pages/PageAdmin";
import SubpageDashboard from "../components/SubpageDashboard";
import SubpageEntries from "../components/SubpageEntries";

class BrowserRoute extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={PageLogin}/>
            <Route path="/register" component={PageRegister}/>
            <Route path="/products" component={PageProducts}/>
            <Route exact={true} path="/admin" component={PageAdmin}/>
            <Route path="/admin/dashboard" component={SubpageDashboard} exact={true}/>
            <Route path="/admin/entries" component={SubpageEntries}/> 
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BrowserRoute;