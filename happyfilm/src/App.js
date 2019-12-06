import React, { Suspense } from 'react';
import './App.scss';
import _body from "./SASS/Components/Body/_body.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routerHome } from './router'
import HomeTemplate from './components/Templates/HomeTemplate';
import { Spring, config } from 'react-spring/renderprops'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button';

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
      <Suspense fallback={<div className="loader"></div>}>
        <Spring from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
          {props => (<div style={{ width: props.number + "%" }}>
            <Switch>{showMenuHome(routerHome)}</Switch>
            <ScrollUpButton />
          </div>)}
        </Spring>

      </Suspense>
    </BrowserRouter>
  );
}

export default App;
