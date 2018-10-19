import CONSTANTS, {  } from '../Constants.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
export const setInputValue = ({ value, error, field }, { valid }) => {
	return {type: 'SET_INPUT_VALUE', value, error, field, valid};
}

export const changeStep = () => {
	return {type: 'CHANGE_STEP'};
}

export const setStepAttempt = () => {
	return {type: 'SET_STEP_ATTEMPT'};
}

export default {
	setInputValue,
	changeStep,
};