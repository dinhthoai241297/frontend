import { combineReducers } from 'redux';
import SectorReducer from './SectorReducer';
import UserReducer from './UserReducer';
import SchoolReducer from './SchoolReducer';
import LoadingReducer from './LoadingReducer';

const root = combineReducers({
    SectorReducer,
    UserReducer,
    SchoolReducer,
    LoadingReducer
});

export default root;
