import React, { Suspense } from 'react';
import './App.scss';
import _body from "./SASS/Components/Body/_body.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routerHome } from './router'
import HomeTemplate from './components/Templates/HomeTemplate';
import { Spring,config } from 'react-spring/renderprops'


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
      <Suspense fallback={<div>Loading...</div>}>
      <Spring from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
                {props => (<div style={{ width: props.number + "%" }}>
          <Switch>{showMenuHome(routerHome)}</Switch>
        </div>)}
      </Spring>
        
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
