import { combineReducers } from 'redux';
import SectorReducer from './SectorReducer';
import UserReducer from './UserReducer';
import searchs from './SearchReducer';

const root = combineReducers({
    SectorReducer,
    UserReducer,
    searchs

});

export default root;
