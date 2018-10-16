import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js'
import stage from './reducers/stage.js'

/* tools */
import CONSTANTS, { initialState, } from './Constants.js';
import UTILS, {  } from './Utils.js';

/* components */
import Step1 from './components/Step1.js'
import Step2 from './components/Step2.js'
import Step3 from './components/Step3.js'

/* redux store creation */
const store = createStore(
	rootReducer,
	/*combineReducers({
		rootReducer,
		stage,
	}),*/
	initialState,
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
				<Step1 />
				<Step2 />
				<Step3 />
			</div>
		</Provider>;
	}
}

export default App;