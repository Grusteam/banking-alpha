import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setInputValue } from '../redux/actions.js'

import UTILS, { getFileLink, getError, validateForm } from '../Utils.js';

class Input extends Component {
	async onChange(e, type) {
		const
			{ setting: { name, field }, onInputChange, STEP, INPUTS } = this.props,
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
		
		console.log('error, stepValid', error, stepValid);
		
		onInputChange({value: result, error, field}, {valid: stepValid});
	}
	
	render() {
		const
			{ setting: {name, field, type, placeholder, value}, onChange } = this.props,
			{ ERROR, TOUCHED, VALUE } = value,
			file = type == 'file';
		
		return <div className="info__name">
			<div className="info__title">{name}</div>
			<input
				type={type || 'text'}
				name={field}
				onChange={(e) => this.onChange.bind(this)(e, type)}
				className="info__name-input"
			/>
		</div>
	}
}

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