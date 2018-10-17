import CONSTANTS, { steps, initialState } from './Constants.js';

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
	getError = (value, type) => {
		const result = value && value.length > 0 ? false : type == 'file' ? 'выберите файл' : 'заполните поле';
		
		return result;
	},
	validateForm = (state, action) => {
		const
			{ STEP } = state,
			{  } = action,
			currentFields = steps[STEP] || [],
			ERRORS = {};
		
		let wasErrors = false;
			
		currentFields.forEach(({ name, field, type }) => {
			const
				currentValue = state[field],
				error = getError(currentValue, type);
				
			if (error) {
				ERRORS[field] = error;
				wasErrors = true;
			}
		});
		
		return wasErrors ? ERRORS : null;
	},
	getRandom = (min, max) => Math.floor(Math.random() * max) + min,
	getFileLink = async file => {
		const
			data = await fetch('https://jsonplaceholder.typicode.com/photos')
				.then(response => response.json())
				.then(json => json),
			url = data[getRandom(0, 4999)].url;
			
			return url;
	},
	getInitialState = steps => {
		for (const step in steps) {
			const value = steps[step];
			
			value.forEach(({ name, field, defaultValue }) => {
				initialState[field] = defaultValue;
			});
		}
		
		return initialState;
	};
	
/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const UTILS = {
	drawDump,
	validateForm,
	getInitialState,
	getFileLink,
};

export {
	drawDump,
	validateForm,
	getInitialState,
	getFileLink,
};

export default UTILS;