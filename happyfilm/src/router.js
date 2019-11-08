import HomePage from "./components/Pages/HomePage";
import DetailMovie from "./components/Pages/DetailMovie";
import LichChieuCinema from "./components/Pages/LichChieuCinema";
import About from "./components/Pages/About";
import ThoaThuan from './components/Pages/ThoaThuan';
import QuyCheHoatDong from './components/Pages/QuyCheHoatDong';
import ChinhSachBaoMat from './components/Pages/ChinhSachBaoMat';
import TheLoaiPhim from './components/Pages/TheLoaiPhim';
import PhimHayThang from './components/Pages/PhimHayThang';
import BlogDienAnh from './components/Pages/BlogDienAnh';
import BinhLuanPhim from './components/Pages/BinhLuanPhim';
import GopY from './components/Pages/GopY';
import Sale from './components/Pages/Sale';
import RapGiaVe from './components/Pages/RapGiaVe'
import Facebook from './components/Pages/Facebook';
import Google from './components/Pages/Google';
import Instagram from './components/Pages/Instagram';
import ListBranch from "./components/Branch-cinema/ListBranch";
import DatVe from "./components/Pages/DatVe";

const routerHome = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/ve-chung-toi",
        exact: false,
        component: About
    },
    {
        path: "/thoa-thuan-su-dung",
        exact: false,
        component: ThoaThuan
    },
    {
        path: "/quy-che-hoat-dong",
        exact: false,
        component: QuyCheHoatDong
    },
    {
        path: "/chinh-sach-bao-mat",
        exact: false,
        component: ChinhSachBaoMat
    },
    {
        path: "/the-loai-phim",
        exact: false,
        component: TheLoaiPhim
    },
    {
        path: "/phim-hay-thang",
        exact: false,
        component: PhimHayThang
    },
    {
        path: "/blog-dien-anh",
        exact: false,
        component: BlogDienAnh
    },
    {
        path: "/binh-luan-phim",
        exact: false,
        component: BinhLuanPhim
    },
    {
        path: "/gop-y",
        exact: false,
        component: GopY
    },
    {
        path: "/sale-service",
        exact: false,
        component: Sale
    },
    {
        path: "/rap-gia-ve",
        exact: false,
        component: RapGiaVe
    },
    {
        path: "/face-book",
        exact: false,
        component: Facebook
    },
    {
        path: "/goo-gle",
        exact: false,
        component: Google
    },
    {
        path: "/insta-gram",
        exact: false,
        component: Instagram
    },
    {
        path: "/chi-tiet-phim/:id",
        exact: false,
        component: DetailMovie
    },
    {
        path: "/danh-sach-phim",
        exact: false,
        component: ListBranch
    },
    {
        path: "/lich-chieu/:id",
        exact: false,
        component: LichChieuCinema
    },
    {
        path: "/dat-ve/:id",
        exact: false,
        component: DatVe
    },

]




export { routerHome }