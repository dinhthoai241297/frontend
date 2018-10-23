import * as actionTypes from './../actionTypes/UserActionTypes';
import UserApi from './../api/UserApi';

export const loginApi = (username, password) => {
    return dispatch => UserApi.login({ username, password }).then(res => {
        if (res.body.code === 200) {
            dispatch(loginState(res.body.data));
            localStorage.setItem('data', res.body.data);
        }
        return res;
    }).catch(error => {
        throw (error);
    });
}

export const loginState = user => {
    return {
        type: actionTypes.LOGIN,
        user
    }
}

export const logoutApi = () => {
    return dispatch => UserApi.logout().then(res => {
        if (res.body.code === 200) {
            dispatch(loginState());
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