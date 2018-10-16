import CONSTANTS, { arrivalSelectSetting } from './Constants.js';

const
	getCountSuffix = num => {
		if (num == 1) {
			return 'ая';
		} else if (num >= 2 && num <= 4) {
			return 'ые';
		}
		
		return '';
	},
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
	validateForm = x => {
		console.log('x', x);
	},
	getSetup = (state, stage) => {
		
		const
			{ type, STEP_1, STEP_2, STEP_3, BED_COUNT, ROOM_COUNT, USER_NAME, USER_SURNAME, USER_EMAIL, USER_PHONE, WORK_STATE, GUEST_STATE, GUEST_FULLNAME, GUEST_MAIL, USER_ANNOTATION, USER_SILENT_NUMBER, ARRIVAL_TIME = 0, CARD_NUMBER, CARD_EXPIRED, CARD_CVV, } = state,
			byHand = type == 'CLOSE_STEP';
		
		const stages = {
			stage_1: {
				bed_count: BED_COUNT,
				room_count: ROOM_COUNT,
			},
			stage_2: {
				business: WORK_STATE,
				user: {
					name: USER_NAME,
					surname: USER_SURNAME,
					email: USER_EMAIL,
					phone: USER_PHONE,
				},
				holder: {
					is_another_person: GUEST_STATE,
				},
				request: {
					annotation: USER_ANNOTATION,
					silent: USER_SILENT_NUMBER ? 1 : 0,
					arrival: arrivalSelectSetting['options'][ARRIVAL_TIME]['name'],
				},
			},
			stage_3: {
				payment: {
					type: 0,
					card: {
						number: CARD_NUMBER,
						expired: CARD_EXPIRED,
						cvv: CARD_CVV,
					}
				},
			},
		},
		{ stage_1, stage_2, stage_3 } = stages;
			
		/* anotherHolder */
		const { holder } = stage_2;
		
		if (holder.is_another_person == 1) {
			holder.fullname = GUEST_FULLNAME;
			holder.email = GUEST_MAIL;
		} else {}
		
		if (stage || byHand) return stages[`stage_${stage}`];
		
		const result = Object.assign({}, (STEP_1 || stage_1), (STEP_2 || stage_2), (STEP_3 || stage_3));
		
		return result;	
	};
	
/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const UTILS = {
	getCountSuffix,
	getSetup,
	drawDump,
	validateForm,
};

export {
	getCountSuffix,
	getSetup,
	drawDump,
	validateForm,
};

export default UTILS;