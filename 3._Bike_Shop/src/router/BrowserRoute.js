import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageLogin from '../pages/PageLogin';
import PageRegister from '../pages/PageRegister';
import PageProducts from '../pages/PageProducts';

class BrowserRoute extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={PageLogin}/>
            <Route path="/register" component={PageRegister}/>
            <Route path="/products" component={PageProducts}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BrowserRoute;