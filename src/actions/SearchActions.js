import SearchApi from './../api/SearchApi';
import * as actionTypes from './../actionTypes/SearchActionTypes';

export const getOneNameApi = (name, code, province, description) => {
    return (dispatch, getState) => searchApi.add({
        name,
        code,
        province,
        description,
        session: getState().LoginReducer.session
    }).then(res => {
        if (res.body.code === 200) {
            dispatch(getOneNameState(school));
        }
        return res.body.code;
    }).catch(error => {
        throw (error);
    });
};

export const getOneNameState = (name, code, province, description) => {
    return {
        type: actionTypes.GET_ONE_NAME,
        name, code, province, description
    };
};

