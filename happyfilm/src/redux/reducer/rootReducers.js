import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import ThongTinrapReducer from './ThongTinrapReducer';
import lichChieuReducer from './lichChieuReducer';
import clientReducer from './clientReducer';

const rootReducers = combineReducers(
    {
        movieReducer,
        ThongTinrapReducer,
        lichChieuReducer,
        clientReducer,
    }
)
export default rootReducers;