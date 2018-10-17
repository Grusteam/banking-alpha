import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js'
import stage from './reducers/stage.js'

/* tools */
import CONSTANTS, { steps } from './Constants.js';
import UTILS, { getInitialState } from './Utils.js';

/* components */
import UniversalStep from './components/UniversalStep.js'

/* redux store creation */
const store = createStore(
	rootReducer,
	/*combineReducers({
		rootReducer,
		stage,
	}),*/
	getInitialState(steps),
	compose(
		// applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class App extends Component {
	constructor(props, context) {
		super(props);
		
		/*this*/
		// this.test = this.test.bind(this);
	}
	
	render() {
		/*return <div>123</div>;*/
		return <Provider store={store}>
			<div id="react-wrapper">
				<UniversalStep />
			</div>
		</Provider>;
	}
}

export default App;