import * as ActionType from '../constants/ActionType';

let initState = {
    ListFilms: []
}
const lichChieuReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_DATA_RAP:
            let ListRaps  = action.ListRap;
            return { ListRaps }
        default:
            return {...state}
    }
}

export default lichChieuReducer;