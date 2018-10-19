import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/* reducers */
import rootReducer from './redux/rootReducer.js'

/* tools */
import CONSTANTS, { steps } from './Constants.js';
import UTILS, { getInitialState } from './Utils.js';

/* components */
import App from './App.js'

/* redux store creation */
const store = createStore(
	rootReducer,
	/*combineReducers({
		rootReducer,
	}),*/
	getInitialState(steps),
	compose(
		// applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class ReduxApp extends Component {
	render() {
		return <Provider store={store}>
			<App />
		</Provider>;
	}
}

export default ReduxApp;