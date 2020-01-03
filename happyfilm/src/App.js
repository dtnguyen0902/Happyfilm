import React, { Suspense } from 'react';
import './App.scss';
import _body from "./SASS/Components/Body/_body.scss";
import { BrowserRouter, Switch } from 'react-router-dom';
import { routerHome } from './router'
import HomeTemplate from './components/Templates/HomeTemplate';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { positions, Provider } from "react-alert";

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
  const options = {
    timeout: 2000,
    positions: positions.BOTTOM_CENTER
  }
  return (
    <BrowserRouter>
      <Provider  {...options}>
        <Suspense fallback={<div class="loader__wrap" role="alertdialog" aria-busy="true" aria-live="polite" aria-label="Loading…">
          <div class="loader" aria-hidden="true">
            <div class="loader__sq"></div>
            <div class="loader__sq"></div>
          </div>
        </div>}>
          <Switch>{showMenuHome(routerHome)}</Switch>
          <ScrollUpButton />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
