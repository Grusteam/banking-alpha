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
		const result = value && value.length >= 5 ? false : type == 'file' ? 'выберите файл' : 'длина меньше 5';
		return result;
	},
	validateForm = (STEP, inputs, instantField) => {
		const currentStep = steps[STEP] || [];
		
		let currentStepValid = true;
		
		currentStep.forEach(({ name, field, type }) => {
			const
				itIsInstantField = !instantField ? false : field === instantField.field,
				currentState = itIsInstantField ? instantField : inputs[field];
				
			if (!currentState.TOUCHED || currentState.ERROR) {
				currentStepValid = false;
			}
		});
		
		return currentStepValid;
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
				initialState['INPUTS'][field] = {};
				initialState['INPUTS'][field]['VALUE'] = defaultValue;
				initialState['INPUTS'][field]['ERROR'] = null;
				initialState['INPUTS'][field]['TOUCHED'] = false;
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
	getError,
};

export {
	drawDump,
	validateForm,
	getInitialState,
	getFileLink,
	getError,
};

export default UTILS;