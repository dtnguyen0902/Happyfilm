import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import ThongTinrapReducer from './ThongTinrapReducer';
import lichChieuReducer from './lichChieuReducer';
const rootReducers = combineReducers(
    {
        movieReducer,
        ThongTinrapReducer,
        lichChieuReducer
    }
)
export default rootReducers;