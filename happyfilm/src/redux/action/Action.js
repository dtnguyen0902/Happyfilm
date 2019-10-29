import * as ActionType from '../constants/ActionType';
import Axios from 'axios';

const layDuLieu = ListFilm => {
    return {
        type: ActionType.LAY_DATA,
        ListFilm
    }
}
const actOnListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(result => {
                console.log(result)
                dispatch(layDuLieu(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const layThongTinrap = ListRap => {
    return {
        type: ActionType.LAY_THONG_TIN_RAP,
        ListRap
    }
}
const layThongTinLichChieu = ListLichChieu => {
    return {
        type: ActionType.LAY_THONG_TIN_LICH_CHIEU,
        ListLichChieu
    }
}
const layMaRap = CumRap => {
    return {
        type: ActionType.LAY_MA_RAP,
        CumRap
    }
}
const layDsPhim = danhSachPhim => {
    return {
        type: ActionType.LAY_DS_PHIM,
        danhSachPhim
    }
}
export { layDuLieu, layThongTinrap, layThongTinLichChieu, layMaRap, layDsPhim, actOnListMovieAPI }