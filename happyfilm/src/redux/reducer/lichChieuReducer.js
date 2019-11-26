import * as ActionType from '../constants/ActionType';

let initState = {
    dSachLichChieu: {}
}
const lichChieuReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_DS_PHONG_VE:
            state.dSachLichChieu = action.dSachLichChieu;
            return { ...state }
        default:
            return { ...state }
    }
}

export default lichChieuReducer;