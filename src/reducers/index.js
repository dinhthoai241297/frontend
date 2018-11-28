import { combineReducers } from 'redux';
import SectorReducer from './SectorReducer';
import UserReducer from './UserReducer';
import SchoolReducer from './SchoolReducer';
import LoadingReducer from './LoadingReducer';
import SubjectGroupReducer from './SubjectGroupReducer';
import NewReducer from './NewReducer';

const root = combineReducers({
    SectorReducer,
    UserReducer,
    SchoolReducer,
    LoadingReducer,
    SubjectGroupReducer,
    NewReducer
});

export default root;
