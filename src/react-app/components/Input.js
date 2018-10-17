import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

import UTILS, { getFileLink } from '../Utils.js';

class Input extends Component {
	async onChange(e) {
		const
			{ setting: { name, field }, onInputChange } = this.props,
			{ target } = e,
			{ value, files } = target;
			
		let result = value;
			
		if (files) {
			const
				file = files[0],
				url = await getFileLink(file);
				
			console.log('file', file);
			
			result = file ? url : '';
		}
		
		onInputChange({value: result, field});
	}
	
	render() {
		const
			{ setting: {name, field, type, placeholder}, onChange } = this.props,
			file = type == 'file';
		
		return <div className="info__name">
			<div className="info__title">{name}</div>
			<input
				type={type || 'text'}
				name={field}
				onChange={this.onChange.bind(this)}
				className="info__name-input"
			/>
		</div>
	}
}

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => ({
	onInputChange: ({ value, field }) => dispatch({type: 'SET_INPUT_VALUE', value, field}),
});

const InputRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);

export default InputRedux;