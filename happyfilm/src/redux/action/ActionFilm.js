import * as types from '../constants/ActionType';
import { addUser } from '../../services/film-services';

export const addUser = (user) => dispatch => {
    addUserService(user).then(data=>{
        alert("Them Thanh Cong")
        dispatch(addFilmSuccess(data))
    })
    .catch(err=>{
        alert("Loi Cmnr")
    });
}

export const addFilmSuccess  = (data) => ({
    type: types.ADD_USER,
    data: data
})