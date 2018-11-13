import * as actionTypes from './../actionTypes/SchoolActionTypes';
import SchoolApi from './../api/SchoolApi';

export const loadSchoolApi = (page, keyword) => {
    return dispatch => SchoolApi.getAll({ page, name: keyword }).then(res => {
        if (res.body.code === 200) {
            dispatch(loadSchooState(res.body.data));
        }
        return res;
    });
}

export const loadSchooState = data => {
    return {
        type: actionTypes.LOAD_SCHOOL,
        data
    }
}