import HomePage from "./components/Pages/HomePage";
import DetailMovie from "./components/ListPhim/DetailMovie";

import headerlogin from './components/header/headerlogin';
import HomePageLogin from "./components/Pages/HomePageLogin";


const routerHome = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path:"/homepage-login",
        exact:false,
        component:HomePageLogin
    }
    ,{
        path:"/detail-movie/:id",
        exact:false,
        component:DetailMovie
    }
    
]

export {routerHome}