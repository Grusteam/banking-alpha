import UTILS, { drawDump } from '../Utils.js';

const stage = (state = {}, action) => {
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
	
	switch (action.type) {
		case 'XXX':
			console.log('zzz');
			
			return state;
			
		default:
			return state;
	}
};

export default stage;