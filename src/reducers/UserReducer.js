import * as actions from './../actionTypes/UserActionTypes';

const intitState = {
    user: undefined
}

const UserReducer = (state = intitState, action) => {
    switch (action.type) {
        case actions.LOGIN: {
            return {
                ...state,
                user: action.data.user,
                session: action.data.session
            }
        }
        case actions.LOGOUT: {
            return {
                ...state,
                user: undefined,
                session: undefined
            }
        }
        default: {
            return { ...state };
        }
    }
}

export default UserReducer;