import React from 'react';
import './App.scss';

import _body from "./SASS/Components/Body/_body.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routerHome } from './router'


function App() {
  const showMenuHome = routers => {
    if (routers && routers.length > 0) {
      return routers.map((item, index) => {
        return (
          <Route key={index} exact={item.exact} path={item.path} component={item.component} />
        )
      })
    }
  }
  return (
    <BrowserRouter>
      <div>
        <Switch>{showMenuHome(routerHome)}</Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
