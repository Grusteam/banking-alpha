import UTILS, { getSetup, drawDump, validateForm } from '../Utils.js';
import CONSTANTS, { stepConstants } from '../Constants.js';

const rootReducer = (state = {}, action) => {
	// console.log('action', action);
	
	const {
		STEP = state.STEP ? +state.STEP : 1,
		SETUP,
		name = '',
		value = '',
		field = '',
		parent = '',
		finalSetup = null,
	} = action;
	
	const
		closeStep = (anySetup, STEP) => {
			const stepSetup = getSetup(anySetup, STEP);
			
			delete anySetup['type'];
			delete anySetup['STEP'];
			
			const newState = Object.assign({}, anySetup, {
				[`STEP_${STEP}`]: stepSetup,
			})
			
			const TEMPOPRARRY_FRESH_STATE = Object.assign({}, state, newState);
			
			if (STEP == 3) {
				const SETUP = getSetup(TEMPOPRARRY_FRESH_STATE);
					
				newState['FINISH_SETUP'] = SETUP;
				
				drawDump(SETUP);
			}
			
			return newState;
		};
		
	switch (action.type) {
		case 'CHANGE_STEP':
			const stepData = closeStep(state, STEP);
			
			validateForm(stepData);
			
			return Object.assign({}, state, stepData, {
				STEP: STEP + 1,
			});
			
		/* by hand compatibility */
		case 'CLOSE_STEP':
			return Object.assign({}, state, closeStep(action, action.STEP));
			
		/*CHECHBOX_*/
		case 'SET_CHECHBOX':
			return Object.assign({}, state, {
				[`${field}`.toUpperCase()]: value,
			});
			
		/*INPUT_*/
		case 'SET_INPUT_VALUE':
			return Object.assign({}, state, {
				[`${field}`.toUpperCase()]: value,
			});
			
		/*RADIO_*/
		case 'SET_RADIO_VALUE':
			return Object.assign({}, state, {
				[`${field}`.toUpperCase()]: value,
			});
			
		/*SELECT_*/
		case 'SET_SELECT_VALUE':
			return Object.assign({}, state, {
				[`${field}`.toUpperCase()]: value,
			});
			
		default:
			return state;
	}
};

export default rootReducer;