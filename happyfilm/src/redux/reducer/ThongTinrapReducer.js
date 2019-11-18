import * as ActionType from '../constants/ActionType';

let initState = {
    ListRaps: [],
    Cinema: [],
    ListCinemas: [],
    CinemaMovie: {},
    Booking: {}
}
const ThongTinrapReducer = (state = initState, action) => {
    switch (action.type) {
        //Lấy danh sách các cụm rạp
        case ActionType.LAY_DATA_RAP:
            state.ListRaps = action.ListRap;
            return { ...state }

        //Lấy chi tiết chi nhánh từng cụm rạp
        case ActionType.LAY_CHI_TIET_RAP:
            state.ListCinemas = action.ListCinemas;
            return { ...state }

        //Lấy lich chiếu theo rạp
        case ActionType.LAY_LICH_CHIEU_RAP:
            state.Cinema = action.Cinema;
            return { ...state }

        //Lấy lịch chiếu theo phim
        case ActionType.LAY_LICH_CHIEU_PHIM:
            state.CinemaMovie = action.CinemaMovie
            return { ...state }
            
        case ActionType.LAY_DS_PHONG_VE:
            state.Booking = action.Booking;
            return {...state}
        default:
            return { ...state }
    }
}
export default ThongTinrapReducer;