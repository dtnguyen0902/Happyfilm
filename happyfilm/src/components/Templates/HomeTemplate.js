import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/navbar'
import ManagerFooter from '../Footer/ManagerFooter';
const Headers = React.lazy(() => import('../header/header'))
const HomeLayOut = (props) => {
    return (
        <div>
            <Headers />
            <Navbar />
            {props.children}
            <ManagerFooter />
        </div>

    )
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