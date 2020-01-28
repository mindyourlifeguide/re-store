import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware, logger)),
);

const delayedActionCreator = timeout => dispatch => {
	setTimeout(
		() =>
			dispatch({
				type: 'DELAYED_ACTION',
			}),
		timeout,
	);
};

store.dispatch(delayedActionCreator(3000));

export default store;
