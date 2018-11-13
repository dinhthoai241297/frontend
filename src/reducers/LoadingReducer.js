import * as actions from './../actionTypes/LoadingActionTypes';

const intitState = {
    loading: false
}

const SchoolReducer = (state = intitState, action) => {
    switch (action.type) {
        case actions.LOADING: {
            console.log('here');
            return { loading: action.loading }
        }
        default: {
            return { ...state };
        }
    }
}

export default SchoolReducer;