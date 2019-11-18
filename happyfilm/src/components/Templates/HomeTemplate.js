import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../Navbar/navbar'
import ManagerFooter from '../Footer/ManagerFooter';
const Headers = React.lazy(() => import('../header/header'))
const HomeLayOut = (props) => {
    return (<Fragment>
        <Headers />
        <Navbar />
        {props.children}
        <ManagerFooter />
    </Fragment>)
}
export default function HomeTemplate({ Component, ...props }) {
    return (<Route
        {...props}
        render={propsComponent => (
            <HomeLayOut>
                <Component {...propsComponent} />
            </HomeLayOut>)}
    />)
}