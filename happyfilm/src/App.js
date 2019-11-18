import React, { Suspense } from 'react';
import './App.scss';
import _body from "./SASS/Components/Body/_body.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routerHome } from './router'
import HomeTemplate from './components/Templates/HomeTemplate';



function App() {
  const showMenuHome = routers => {
    if (routers && routers.length > 0) {
      return routers.map((item, index) => {
        return (
          <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
        )
      })
    }
  }
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>{showMenuHome(routerHome)}</Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
