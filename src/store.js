import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);

const originalDispatch = store.dispatch;

store.dispatch = action => {
	if (typeof action === 'string') {
		return originalDispatch({
			type: action,
		});
	}
	originalDispatch(action);
};

store.dispatch('HELLO_WORLD');

export default store;
