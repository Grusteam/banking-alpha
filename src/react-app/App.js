import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* redux actions */
import Actions, {  } from './redux/actions.js'

/* tools */
import CONSTANTS, { steps } from './Constants.js';
import UTILS, { validateForm } from './Utils.js';

/* components */
import UniversalStep from './components/UniversalStep.js'

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class App extends Component {
	constructor(props, context) {
		super(props);

		const { STEP } = props;
	}
	
	componentWillReceiveProps({ STEP }) {
		if (false) {
		}
	}
	
	/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
	render() {
		const
			{ STEP } = this.props; /* redux state */
			
		return (
			STEP === 4 ? 
			<div id="finish">
				finish
			</div> :
			<UniversalStep/>
		);
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const
	mapStateToProps = ({ STEP }) => {
		return {
			STEP,
		};
	},
	mapDispatchToProps = dispatch => ({
		// test: () => dispatch(test()),
	});

const AppRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppRedux;