import UTILS, { drawDump } from '../Utils.js';
import CONSTANTS, {  } from '../Constants.js';

const rootReducer = (state = {}, action) => {
	const {
		STEP = state.STEP ? +state.STEP : 1,
		value = '',
		error = null,
		field = '',
		valid = false,
	} = action;
	
	const applyInputValues = () => {
		const
			currentFieldNewState = {
				[`${field}`]: {
					VALUE: value,
					ERROR: error,
					TOUCHED: true,
				}
			},
			inputs = Object.assign({}, state.INPUTS, currentFieldNewState);
		
		return inputs;	
	};
	
	switch (action.type) {
		/* input */	
		case 'SET_INPUT_VALUE':
			return Object.assign({}, state, {
				INPUTS: applyInputValues(),
				STEP_VALIDITY: Object.assign({}, state.STEP_VALIDITY, {
					[STEP]: valid,
				}),
			});
			
		/* step button */
		case 'CHANGE_STEP':
			return Object.assign( {}, state, {
				STEP: STEP + 1
			});
			
		/* step button */
		case 'SET_STEP_ATTEMPT':
			return Object.assign( {}, state, {
				STEP_ATTEMPTS: Object.assign({}, state.STEP_ATTEMPTS, {
					[STEP]: true,
				}),
			});
			
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default rootReducer;