import HomePage from "./components/Pages/HomePage";
import DetailMovie from "./components/ListPhim/DetailMovie";


const routerHome = [
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    ,{
        path:"/detail-movie/:id",
        exact:false,
        component:DetailMovie
    }
]

export {routerHome}