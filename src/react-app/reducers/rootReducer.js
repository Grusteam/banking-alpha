import UTILS, { drawDump, validateForm } from '../Utils.js';
import CONSTANTS, {  } from '../Constants.js';

const rootReducer = (state = {}, action) => {
	const {
		STEP = state.STEP ? +state.STEP : 1,
		value = '',
		field = '',
	} = action;
	
	switch (action.type) {
		case 'CHANGE_STEP':
			const ERRORS = validateForm(state, action);
			
			return Object.assign(
				{},
				state,
				ERRORS ?
					{ERRORS} :
					{
						STEP: STEP + 1,
						ERRORS: {},
					},
			);
			
		/*INPUT_*/
		case 'SET_INPUT_VALUE':
			return Object.assign({}, state, {
				[`${field}`.toUpperCase()]: value,
			});
			
		default:
			return state;
	}
};

export default rootReducer;