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
	/*onClick() {
		const { onNextStepClick } = this.props;
		onNextStepClick();
	}*/
	
	render() {
		const
			{ STEP, onNextStepClick, GUEST_STATE } = this.props,
			currentSteps = steps[STEP] || [];
		
		return <div className={`step-view ${true && 'is-active'}`}>
			{currentSteps.map(({ name, field, defaultValue }, i) => {
				return <Input key={i} setting={{name, field}} />
			})}
			<button
				onClick={onNextStepClick}
				className="btn"
			>
				button
			</button>
		</div>
	}
}

const
	mapStateToProps = ({ STEP, GUEST_STATE }) => {
		return {
			STEP,
			GUEST_STATE,
		};
	},
	mapDispatchToProps = dispatch => ({
		onNextStepClick: () => dispatch({type: 'CHANGE_STEP'}),
	});

const UniversalStepRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(UniversalStep)

export default UniversalStepRedux;