import * as ActionType from '../constants/ActionType';

let initState = {
    ListFilms: []
}
const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_DATA:
            let ListFilms = action.ListFilm;
            return { ListFilms }

        case ActionType.LAY_TRAILER:
            {
                let ListFilms = action.ListFilm;
                return { ListFilms }
            }
        default:
            return { ...state }
    }
}
export default movieReducer;