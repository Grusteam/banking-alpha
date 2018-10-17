import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

/* components */
import Input from './Input.js'

/* tools */
import CONSTANTS, { steps } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

/*Шаг 2 введите данные*/
class UniversalStep extends Component {
	render() {
		const
			{ STEP, ERRORS, onNextStepClick } = this.props,
			currentSteps = steps[STEP] || [];
		
		return <div className={`step-view ${true && 'is-active'}`}>
			{currentSteps.map(({ name, field, defaultValue, type }, i) => {
				const identifier = `${field}_${i}`
				return <div key={identifier} className="input-wrapper">
				
					<Input setting={{name, field, type}} />
					
					<div className="input-error">
						{ERRORS && ERRORS[field]}
					</div>
					
				</div>
			})}
			
			<button
				onClick={onNextStepClick}
				className="btn"
			>
				Close step
			</button>
		</div>
	}
}

const
	mapStateToProps = ({ STEP, ERRORS }) => {
		return {
			STEP,
			ERRORS,
		};
	},
	mapDispatchToProps = dispatch => ({
		onNextStepClick: () => dispatch({type: 'CHANGE_STEP'}),
	});

const UniversalStepRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(UniversalStep);

export default UniversalStepRedux;