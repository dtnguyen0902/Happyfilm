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
                dispatch(layDuLieu(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const layThongTinrap = ListRap => {
    return {
        type: ActionType.LAY_DATA_RAP,
        ListRap
    }
}
const actListRapAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
            .then(result => {
                console.log(result)
                dispatch(layThongTinrap(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export { layDuLieu, layThongTinrap, actOnListMovieAPI, actListRapAPI }