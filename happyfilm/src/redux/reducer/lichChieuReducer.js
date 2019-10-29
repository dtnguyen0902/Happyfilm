import * as ActionType from '../constants/ActionType';

let initState = {
    cum:{},
    ListLichChieus: [
        {
            CumRaps: [
                {
                    danhSachPhims: []
                }
            ]
        }
    ]
}
const lichChieuReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_THONG_TIN_LICH_CHIEU:
            let ListLichChieus = action.ListLichChieu;
            return { ListLichChieus }
        case ActionType.LAY_MA_RAP:
            let CumRaps = action.ListLichChieu.cum;
            return { CumRaps }
        case ActionType.LAY_DS_PHIM:

        default:
            return { ...state }
    }
}
export default lichChieuReducer;