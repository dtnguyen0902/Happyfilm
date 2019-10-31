import HomePage from "./components/Pages/HomePage";
import DetailMovie from "./components/Pages/DetailMovie";


const routerHome = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/chi-tiet-phim/:id",
        exact: false,
        component: DetailMovie
    }
]

export { routerHome }