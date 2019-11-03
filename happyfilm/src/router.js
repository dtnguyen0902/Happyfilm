import HomePage from "./components/Pages/HomePage";
import DetailMovie from "./components/Pages/DetailMovie";
import LocationCinema from './components/Pages/LocationCinema';
import LichChieuCinema from "./components/Pages/LichChieuCinema";


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
    },
    {
        path: "/:id",
        exact: false,
        component: LocationCinema
    },
    {
        path:"detail-showtime/:id",
        exact: true,
        component: LichChieuCinema
    },

]




export { routerHome}