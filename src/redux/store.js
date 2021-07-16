import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootRdeucer from './root-reducer'

const middleware = [logger];

const store = createStore(rootRdeucer, applyMiddleware(...middleware));

export default store;