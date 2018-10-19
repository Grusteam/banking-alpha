import CONSTANTS, {  } from '../Constants.js';

/* input */	
export const setInputValue = ({ value, error, field }, { valid }) => {
	return {type: 'SET_INPUT_VALUE', value, error, field, valid};
}

/* step button */
export const changeStep = () => {
	return {type: 'CHANGE_STEP'};
}

/* step button */
export const setStepAttempt = () => {
	return {type: 'SET_STEP_ATTEMPT'};
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

export default {
	setInputValue,
	changeStep,
};