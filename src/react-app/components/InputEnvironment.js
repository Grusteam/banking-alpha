import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {  } from '../redux/actions.js'

import UTILS, {  } from '../Utils.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class InputEnvironment extends Component {
	render() {
		const
			{ children, setting: { name, value }, onChange } = this.props, /* parent */
			{ STEP, INPUTS, STEP_ATTEMPTS, STEP_VALIDITY } = this.props, /* redux state */
			{ ERROR, TOUCHED, VALUE } = value,
			stepWasAttempt = STEP_ATTEMPTS[STEP] || false;
			
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
		
		return <div className="input-wrapper">
		
			{/* name */}
			<div className="info__title">{name}</div>
			
			{/* input */}
			{ children }
		
			{/* error */}
			<div className="input-error">
				{stepWasAttempt && (!TOUCHED ? 'не заполнено' : ERROR)}
			</div>
			
		</div>;
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const mapStateToProps = ({ STEP, INPUTS, STEP_ATTEMPTS, STEP_VALIDITY }) => {
	return {
		STEP,
		INPUTS,
		STEP_ATTEMPTS,
		STEP_VALIDITY,
	}
}

const mapDispatchToProps = dispatch => ({
	/*onInputChange: (input, step) => dispatch(setInputValue(input, step)),*/
});

const InputEnvironmentRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputEnvironment);

export default InputEnvironmentRedux;