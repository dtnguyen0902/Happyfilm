import * as ActionType from '../constants/ActionType';

let initState = {
    ListRaps: []
}
const ThongTinrapReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_THONG_TIN_RAP:
            let ListRaps  = action.ListRap;
            return { ListRaps }
        default:
            return {...state}
    }
}
export default ThongTinrapReducer;