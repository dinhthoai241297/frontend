import * as actionTypes from './../actionTypes/LoadingActionTypes';

export const loading = loading => {
    console.log('here', loading);
    return {
        type: actionTypes.LOADING,
        loading
    }
}