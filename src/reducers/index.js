import { combineReducers } from 'redux';
import SectorReducer from './SectorReducer';
import UserReducer from './UserReducer';
import SearchReducer from './SearchReducer';

const root = combineReducers({
    SectorReducer,
    UserReducer,
    SearchReducer

});

export default root;
