import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}

export default configureStore;
