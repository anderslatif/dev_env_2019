import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EntryPage from '../pages/EntryPage';
import PageNotFound from '../pages/PageNotFound';
class AppRoutes extends Component {
  render() {
    return (
      <div className="app__route">
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={EntryPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
        {/* app__route */}
      </div>
    )
  }
}

export default AppRoutes;