import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListCarousel from '../Carousel/ListCarousel';
import Sticker from '../IconSticker.js/Sticker';
import Branch from '../Branch-cinema/branch'
import Promotion from '../Promotion/promotion';
import DienAnh from '../News/DienAnh';

const HomeLayOut = (props) => {
    return (
        <Fragment>
            <Headers />
            <ListCarousel />
            <Sticker />
            <Branch />
            {props.children}
            <Promotion />
            <DienAnh />
        </Fragment>
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
