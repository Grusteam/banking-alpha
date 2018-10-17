import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

/* tools */
import CONSTANTS, {  } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

class Select extends Component {
	onChange(e) {
		const
			{ parent, onSelectChange, setting: { field }, } = this.props,
			{ target } = e,
			{ value, id } = target;
		
		onSelectChange({value, field, parent});
	}
	
	render() {
		const { parent, setting: { field, options, defaultValue }, onChange } = this.props;
		
		return <select
				onChange={this.onChange.bind(this)}
				defaultValue={defaultValue || options[0].value}
				className="reservation-table__select"
			>
			{options.map(({ name, value }, i) => {
				const identifier = `SELECT_${field}_${value}`;
				
				return <option
					value={value}
					key={identifier}
				>
					{name}
				</option>
			})}
		</select>
	}
}

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => ({
	onSelectChange: ({ value, field, parent }) => dispatch({type: 'SET_SELECT_VALUE', value, field, parent}),
});

const SelectRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Select);

export default SelectRedux;