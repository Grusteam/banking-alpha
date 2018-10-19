import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* redux actions */
import Actions, { changeStep, setStepAttempt } from '../redux/actions.js'

/* components */
import InputEnvironment from './InputEnvironment.js'
import Input from './Input.js'

/* tools */
import CONSTANTS, { steps } from '../Constants.js';
import UTILS, { validateForm } from '../Utils.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

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
	
	/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
	render() {
		const
			{ STEP, INPUTS, STEP_ATTEMPTS, STEP_VALIDITY } = this.props,
			currentStep = steps[STEP] || [],
			stepWasAttempt = STEP_ATTEMPTS[STEP] || false,
			stepIsValid = STEP_VALIDITY[STEP] || false;
			
		return <div className={`step-view ${true && 'is-active'}`}>
		
			{/* all inputs in this step */}
			{currentStep.map(({ name, field, defaultValue, type, placeholder }, i) => {
				const
					currentValue = INPUTS[field],
					identifier = `${field}_${i}`;
					
				/* 1 input with name and error */
				return <InputEnvironment
						key={identifier}
						setting={{name, value: currentValue}}
					>
						<Input
							setting={{field, type, placeholder, value: currentValue}}
						/>
				</InputEnvironment>;
			})}
			
			{/* step change button */}
			<button
				className={`btn ${!stepIsValid && stepWasAttempt && 'is-active'}`}
				onClick={this.onNextStepClick.bind(this)}
			>
				Close step
			</button>
		</div>
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

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