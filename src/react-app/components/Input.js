import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setInputValue } from '../redux/actions.js'

import UTILS, { getFileLink, getError, validateForm } from '../Utils.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class Input extends Component {
	async onChange(e) {
		const
			{ setting: { field, type } } = this.props, /* parent */
			{ STEP, INPUTS } = this.props, /* redux state */
			{ onInputChange } = this.props, /* redux actions */
			{ target } = e,
			{ value, files } = target;
			
		let
			result = value,
			error = null,
			stepValid = false;
			
		if (files) {
			const
				file = files[0],
				url = await getFileLink(file);
				
			// console.log('file', file);
			
			result = file ? url : '';
		}
		
		error = getError(result, type);
		
		const instantField = { field, VALUE: result, ERROR: error, TOUCHED: true };
		
		stepValid = validateForm(STEP, INPUTS, instantField);
		// console.log('error, stepValid', error, stepValid);
		
		onInputChange({value: result, error, field}, {valid: stepValid});
	}
	
	/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
	render() {
		const
			{ setting: { field, type, placeholder, value }, onChange } = this.props, /* parent */
			{  } = this.props, /* redux state */
			{ ERROR, TOUCHED, VALUE } = value,
			file = type == 'file';
		
		return <input
			placeholder={placeholder}
			value={file ? undefined : VALUE}
			type={type || 'text'}
			name={field}
			onChange={this.onChange.bind(this)}
			className="info__name-input"
		/>
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const mapStateToProps = ({ STEP, INPUTS }) => {
	return {
		STEP,
		INPUTS,
	}
}

const mapDispatchToProps = dispatch => ({
	onInputChange: (input, step) => dispatch(setInputValue(input, step)),
});

const InputRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);

export default InputRedux;