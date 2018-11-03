import * as actionTypes from './../actionTypes/UserActionTypes';
import UserApi from './../api/UserApi';

export const loginApi = (username, password) => {
    return dispatch => UserApi.login({ username, password }).then(res => {
        if (res.body.code === 200) {
            dispatch(loginState(res.body.data));
            localStorage.setItem('data', JSON.stringify(res.body.data));
        }
        return res;
    }).catch(error => {
        throw (error);
    });
}

export const loginState = data => {
    return {
        type: actionTypes.LOGIN,
        data
    }
}

export const logoutApi = () => {
    return (dispatch, getState) => UserApi.logout({
        session: getState().UserReducer.session
    }).then(res => {
        if (res.body.code === 200) {
            dispatch(logoutState());
            localStorage.setItem('data', null);
        }
    }).catch(error => {
        throw (error);
    });
}

export const logoutState = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const registerApi = (fullName, email, gender, dob, phone, province, subjectGroup) => UserApi.register({ fullName, email, gender, dob, phone, province, subjectGroup }).then(res => {
    return res;
}).catch(error => {
    throw (error);
});