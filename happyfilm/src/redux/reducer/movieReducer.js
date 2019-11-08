import * as ActionType from '../constants/ActionType';

let initState = {
    ListFilms: [],
<<<<<<< HEAD
    movie:{}
=======
    movie: {}
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
}
const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_DATA:
<<<<<<< HEAD
             state.ListFilms=action.ListFilm;
            return { ...state }

        case ActionType.LAY_TRAILER:
            {
                let ListFilms = action.ListFilm;
                return { ListFilms }
            }
        case ActionType.DETAIL_MOVIE:
            console.log(action);
            state.movie=action.movie;

=======
            state.ListFilms = action.ListFilm;
            return { ...state }

        case ActionType.LAY_CHI_TIET_PHIM:
            state.movie = action.movie;
            return { ...state }
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
        default:
            return { ...state }
    }
}
export default movieReducer;