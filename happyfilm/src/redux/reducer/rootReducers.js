import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import ThongTinrapReducer from './ThongTinrapReducer';
import lichChieuReducer from './lichChieuReducer';
<<<<<<< HEAD
import clientReducer from './clientReducer';
=======
import { reducer as formReducer } from 'redux-form'
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
const rootReducers = combineReducers(
    {
        movieReducer,
        ThongTinrapReducer,
        lichChieuReducer,
<<<<<<< HEAD
        clientReducer
=======
        formReducer
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
    }
)
export default rootReducers;