import * as ActionType from '../constants/ActionType';
import Axios from 'axios';

const layDuLieu = ListFilm => {
    return {
        type: ActionType.LAY_DATA,
        ListFilm
    }
}
const layThongTinrap = ListRap => {
    return {
        type: ActionType.LAY_DATA_RAP,
        ListRap
    }
}
const actOnListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(result => {
                dispatch(layDuLieu(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
const actDetailMovieAPI = id => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: ActionType.LAY_CHI_TIET_PHIM,
                    movie: result.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


const actListRapAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
            .then(result => {
                dispatch(layThongTinrap(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
const actLichChieuRapAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`
        })
            .then(result => {
                dispatch({
                    type: ActionType.LAY_LICH_CHIEU_RAP,
                    Cinema: result.data,
                    loading: true
                }
                )
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const actListRapHeThongAPI = id => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.LAY_CHI_TIET_RAP,
                    ListCinemas: result.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export { layDuLieu, layThongTinrap, actOnListMovieAPI, actListRapAPI, actDetailMovieAPI, actListRapHeThongAPI, actLichChieuRapAPI }