import { combineReducers } from 'redux';
import SectorReducer from './SectorReducer';
import UserReducer from './UserReducer';

const root = combineReducers({
    SectorReducer,
    UserReducer
});

export default root;
