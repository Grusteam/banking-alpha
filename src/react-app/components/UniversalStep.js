import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../redux/rootReducer.js'

import Actions, { changeStep, setStepAttempt } from '../redux/actions.js'

/* components */
import Input from './Input.js'

/* tools */
import CONSTANTS, { steps } from '../Constants.js';
import UTILS, { validateForm } from '../Utils.js';

/*Шаг 2 введите данные*/
class UniversalStep extends Component {
	constructor(props, context) {
		super(props);

		const { STEP } = props;
	}
	
	componentWillReceiveProps({ STEP }) {
		if (0) {
		}
	}
	
	onNextStepClick() {
		const
			{ STEP, INPUTS, onNextStepClickRedux, showErrorsRedux } = this.props,
			stepValid = validateForm(STEP, INPUTS);
			
		stepValid ? onNextStepClickRedux() : showErrorsRedux();
	}
	
	render() {
		const
			{ STEP, INPUTS, STEP_ATTEMPTS, STEP_VALIDITY } = this.props,
			currentStep = steps[STEP] || [],
			stepWasAttempt = STEP_ATTEMPTS[STEP] || false,
			stepIsValid = STEP_VALIDITY[STEP] || false;
			
		return <div className={`step-view ${true && 'is-active'}`}>
			{currentStep.map(({ name, field, defaultValue, type }, i) => {
				const
					currentValue = INPUTS[field],
					{ ERROR, TOUCHED, VALUE } = currentValue,
					identifier = `${field}_${i}`;
					
				return <div key={identifier} className="input-wrapper">
				
					<Input setting={{name, field, type, value: currentValue}} />
					
					<div className="input-error">
						{stepWasAttempt && (!TOUCHED ? 'не заполнено' : ERROR)}
					</div>
					
				</div>
			})}
			
			<button
				className={`btn ${!stepIsValid && stepWasAttempt && 'is-active'}`}
				onClick={this.onNextStepClick.bind(this)}
			>
				Close step
			</button>
		</div>
	}
}

const
	mapStateToProps = ({ STEP, INPUTS, STEP_ATTEMPTS, STEP_VALIDITY }) => {
		return {
			STEP,
			INPUTS,
			STEP_ATTEMPTS,
			STEP_VALIDITY,
		};
	},
	mapDispatchToProps = dispatch => ({
		onNextStepClickRedux: () => dispatch(changeStep()),
		showErrorsRedux: () => dispatch(setStepAttempt()),
	});

const UniversalStepRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(UniversalStep);

export default UniversalStepRedux;