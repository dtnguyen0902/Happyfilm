import * as ActionType from '../constants/ActionType';
let initState = {
    ListFilms: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_TRAILER:
            let ListFilms = action.ListFilm;
            return { ListFilms}
        default:
            return {...state}
    }
}

export default userReducer;