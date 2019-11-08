import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import Header from '../header/header';
import Navbar from '../Navbar/navbar'
import ManagerFooter from '../Footer/ManagerFooter';

const HomeLayOut = (props) => {
    return (<Fragment>
        <Header  />
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