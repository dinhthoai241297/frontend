import * as actionTypes from './../actionTypes/SearchActionTypes';

let initialState = {
}


const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ONE_NAME: {
             return {
             	stage
             };
        }
        
        default: {
            return state;
        }
    }
};

export default SearchReducer;