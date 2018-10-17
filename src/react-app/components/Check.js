import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

class Check extends Component {
	onSetCheckbox({ target: { checked } }) {
		const { parent, setting: { title, field }, onSetCheckbox } = this.props;
		
		onSetCheckbox({value: checked, field});
	}
	
	render() {
		const
			{ parent, setting: { title, field }, } = this.props,
			identifier = `${parent}_${field}`.toUpperCase();
		
		return <div className="info__container info__container--row">
			<input
				type="checkbox"
				id={identifier}
				onChange={this.onSetCheckbox.bind(this)}
			/>
			<label htmlFor={identifier}>{title}</label>
		</div>
	}
}

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => ({
	onSetCheckbox: ({ value, field }) => dispatch({type: 'SET_CHECHBOX', value, field}),
});

const CheckRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Check);

export default CheckRedux;