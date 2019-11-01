import * as ActionType from '../constants/ActionType';

let initState = {
    ListFilms: [],
    movie:{}
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
        case ActionType.DETAIL_MOVIE:
            console.log(action);
            state.movie=action.movie;

        default:
            return { ...state }
    }
}
export default movieReducer;