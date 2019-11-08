import * as ActionType from '../constants/ActionType';

let initState = {
    ListRaps: [],
    Cinema: [],
    ListCinemas: []
}
const ThongTinrapReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_DATA_RAP:
            state.ListRaps = action.ListRap;
            return { ...state }

        case ActionType.LAY_CHI_TIET_RAP:
            state.ListCinemas = action.ListCinemas;
            return { ...state }

        case ActionType.LAY_LICH_CHIEU_RAP:
            state.Cinema = action.Cinema;
            return { ...state }

        default:
            return { ...state }
    }
}
export default ThongTinrapReducer;