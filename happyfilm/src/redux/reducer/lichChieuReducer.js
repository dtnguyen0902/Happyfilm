import * as ActionType from '../constants/ActionType';

let initState = {
    
}
const lichChieuReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_DATA_RAP:
            state.ListLichChieus = action.ListLichChieu;
            return { ...state }
        default:
            return { ...state }
    }
}

export default lichChieuReducer;