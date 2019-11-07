import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import ThongTinrapReducer from './ThongTinrapReducer';
import lichChieuReducer from './lichChieuReducer';
import { reducer as formReducer } from 'redux-form'
const rootReducers = combineReducers(
    {
        movieReducer,
        ThongTinrapReducer,
        lichChieuReducer,
        formReducer
    }
)
export default rootReducers;