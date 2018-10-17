import CONSTANTS, { steps } from './Constants.js';

const
	drawDump = SETUP => {
		console.log('send to server =>');
		console.log(SETUP);
		console.log('приятного отдыха');
		
		const
			planeAppRoot = document.getElementById('plane-app'),
			domParagraph = document.createElement('P'),
			text = `123`,
			textNode = document.createTextNode(JSON.stringify(SETUP));
			
		domParagraph.appendChild(textNode);
		planeAppRoot.appendChild(domParagraph);
		
		planeAppRoot.style="opacity: 1; background-color: rgba(0, 200, 0, 0.7)";
	},
	getError = (value, requirements) => {
		const result = value && value.length > 0 ? false : 'заполните поле';
		
		return result;
	},
	validateForm = (state, action) => {
		const
			{ STEP } = state,
			{  } = action,
			currentFields = steps[STEP] || [],
			ERRORS = {};
		
		let wasErrors = false;
			
		currentFields.forEach(({ name, field }) => {
			const
				currentValue = state[field],
				error = getError(currentValue);
				
			if (error) {
				ERRORS[field] = error;
				wasErrors = true;
			}
		});
		
		return wasErrors ? ERRORS : null;
	},
	getInitialState = steps => {
		const initialState = {
			STEP: 1,
		};
		
		for (const step in steps) {
			const value = steps[step];
			
			value.forEach(({ name, field, defaultValue }) => {
				initialState[field] = defaultValue;
			});
		}
		
		return initialState;
	},
	closeStep = (anySetup, STEP) => {
		/*const stepSetup = getSetup(anySetup, STEP);
		
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
		
		return newState;*/
	},
	getSetup = (state, stage) => {
	};
	
/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const UTILS = {
	getSetup,
	drawDump,
	validateForm,
	getInitialState,
};

export {
	getSetup,
	drawDump,
	validateForm,
	getInitialState,
};

export default UTILS;