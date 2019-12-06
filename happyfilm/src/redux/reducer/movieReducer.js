import * as ActionType from '../constants/ActionType';

let initState = {
    ListFilms: [],
    movie: {}

}
const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_DATA:
            state.ListFilms = action.ListFilm;
            return { ...state }
        case ActionType.LAY_CHI_TIET_PHIM:
            state.movie = action.movie;
            return { ...state }

        case ActionType.FILTER_PHIM:
            state.keyword = action.keyword;
            return { ...state }
        default:
            return { ...state }
    }
}
export default movieReducer;