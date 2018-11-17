import { combineReducers } from 'redux';
import SectorReducer from './SectorReducer';
import UserReducer from './UserReducer';
import SchoolReducer from './SchoolReducer';
import LoadingReducer from './LoadingReducer';
import SubjectGroupReducer from './SubjectGroupReducer';

const root = combineReducers({
    SectorReducer,
    UserReducer,
    SchoolReducer,
    LoadingReducer,
    SubjectGroupReducer
});

export default root;
