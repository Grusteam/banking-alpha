import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

/* tools */
import CONSTANTS, {  } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

class Radio extends Component {
	onChange(e) {
		const
			{ parent, onRadioChange, setting: { field }, } = this.props,
			{ target } = e,
			{ value, id } = target;
		
		onRadioChange({value, field, parent});
	}
	
	render() {
		// console.log('this.props', this.props);
		const { parent, exterior, setting: { field, title, options, name }, onChange } = this.props;
		
		return <div className={`radio radio--${exterior}`}>
			<div className="radio__title">{title}</div>
			<div className="radio__button-container"> 
			{options.map(({ name, value }, i) => {
				const identifier = `RADIO_${field}_${value}`;
				
				return <div key={identifier} className="radio__input-container">
						<input
							name={field}
							type="radio"
							value={value}
							id={identifier}
							defaultChecked={i===0}
							onChange={this.onChange.bind(this)}
							className="radio__radio-button"
						/>
						<label className="radio__input-label" htmlFor={identifier}>{name}</label>
					</div>
			})}
			</div>
		</div>
	}
}

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => ({
	onRadioChange: ({ value, field, parent }) => dispatch({type: 'SET_RADIO_VALUE', value, field, parent}),
});

const RadioRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Radio);

export default RadioRedux;