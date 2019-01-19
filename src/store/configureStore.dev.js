import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore() {
    console.log('here');
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
}
