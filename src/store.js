import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware, logger)),
);

export default store;
