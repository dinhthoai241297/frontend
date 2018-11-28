import * as actionTypes from './../actionTypes/UserActionTypes';
import UserApi from './../api/UserApi';

export const loginApi = (email, password) => {
    return dispatch => UserApi.login({ email, password }).then(res => {
        if (res.body.code === 200) {
            dispatch(loginState(res.body.data));
            let { data } = res.body;
            // data.user.password = '******';
            localStorage.setItem('data', JSON.stringify(data));
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

export const updateUserApi = data => {
    return dispatch => UserApi.updateUser(data).then(res => {
        return res;
    }).catch(error => {
        throw (error);
    });
}

export const updateUserState = data => {
    return {
        type: actionTypes.UPDATE_USER,
        data
    }
}