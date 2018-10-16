import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

class Input extends Component {
	onChange(e) {
		const
			{ setting: {name, field}, onInputChange } = this.props,
			{ target } = e,
			{ value } = target;
		
		onInputChange({value, field});
	}
	
	render() {
		const { setting: {name, field, type, placeholder}, onChange } = this.props;
		
		if (type === 'textarea') {
			return <textarea
				className="info__textarea"
				name={field}
				defaultValue=""
				onChange={this.onChange.bind(this)}
				placeholder={placeholder || ''}
			></textarea>
		}
		
		// console.log('this.props', this.props);
		return <div className="info__name">
			<div className="info__title">{name}</div>
			<input
				type="text"
				name={field}
				defaultValue=""
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
)(Input)

export default InputRedux;