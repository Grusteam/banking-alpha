import UTILS, {  } from './Utils.js';

const
	bedRadioSetting = {
		field: 'BED_COUNT',
		title: 'Выберите тип',
		options: [
			{
				name: '2 односпальные кровати',
				value: 2,
			},{
				name: '1 большая двуспальная кровать',
				value: 1,
			},
		],
	},
	cardRadioSetting = {
		field: 'CARD_TYPE',
		title: 'Выберите безопасный способ оплаты, чтобы продолжить Кредитная или дебетовая карта',
		options: [
			{
				name: 'Кредитная или дебетовая карта',
				value: 0,
			},{
				name: 'Ветки или натура',
				value: 1,
			},
		],
	},
	workRadioSetting = {
		field: 'WORK_STATE',
		title: 'Путешествуете по работе?',
		options: [
			{
				name: 'Да',
				value: 1,
			},{
				name: 'Нет',
				value: 0,
			},
		],
	},
	guestRadioSetting = {
		field: 'GUEST_STATE',
		title: 'Кто основной гость?',
		options: [
			{
				name: 'Я',
				value: 0,
			},{
				name: 'Другой человек',
				value: 1,
			},
		],
	},
	roomSelectSetting = {
		field: 'ROOM_COUNT',
		options: [
			{
				name: '0',
				value: 0,
			},
			{
				name: '1 (1200)',
				value: 1,
			},
			{
				name: '2 (2400)',
				value: 2,
			},
			{
				name: '3 (3600)',
				value: 3,
			},
			{
				name: '4 (4800)',
				value: 4,
			},
		],
	},
	arrivalSelectSetting = {
		field: 'ARRIVAL_TIME',
		options: [
			{
				name: '12:00',
				value: 0,
			},
			{
				name: '14:00',
				value: 1,
			},
			{
				name: '16:00',
				value: 2,
			},
		],
	},
	fishActions = {
		1: {
			type: 'CLOSE_STEP',
			STEP: 1,
			BED_COUNT: 1,
			ROOM_COUNT: 2,
		},
		2: {
			type: 'CLOSE_STEP',
			STEP: 2,
			
			USER_NAME: 'Makar',
			USER_SURNAME: 'Svetly',
			USER_EMAIL: 'koshka@riba.kit',
			USER_PHONE: '+79281009988',
			
			WORK_STATE: 1,
			GUEST_STATE: 1,
			
			GUEST_FULLNAME: 'Epifan Kotleta',
			GUEST_MAIL: 'kot@pes.mops',
			
			USER_ANNOTATION: 'Круг для туалета с собой везти?',
			USER_SILENT_NUMBER: true,
			ARRIVAL_TIME: 1,
		},
		3: {
			type: 'CLOSE_STEP',
			STEP: 3,
			
			CARD_TYPE: 0,
			CARD_NUMBER: '9870 0000 6548 4789',
			CARD_EXPIRED: '12/19',
			CARD_CVV: 987,
		} 	
	},
	stepConstants = {
		1: ['BED_COUNT', 'ROOM_COUNT'],
		2: ['USER_NAME', 'USER_SURNAME', 'USER_EMAIL', 'USER_PHONE', 'WORK_STATE', 'GUEST_STATE', 'GUEST_FULLNAME', 'GUEST_MAIL', 'USER_ANNOTATION', 'USER_SILENT_NUMBER', 'ARRIVAL_TIME'],
		3: ['CARD_TYPE', 'CARD_NUMBER', 'CARD_EXPIRED', 'CARD_CVV'],
	},
	initialState = {
		/*rootReducer: {*/
			STEP: 1,
			BED_COUNT: 2,
			ROOM_COUNT: 0,
			
			USER_NAME: '',
			USER_SURNAME: '',
			USER_EMAIL: '',
			USER_PHONE: '',
			WORK_STATE: 1,
			GUEST_STATE: 0,
			
			GUEST_FULLNAME: '',
			GUEST_MAIL: '',
			
			USER_ANNOTATION: '',
			USER_SILENT_NUMBER: false,
			ARRIVAL_TIME: 0,
			
			CARD_TYPE: 0,
			CARD_NUMBER: 0,
			CARD_EXPIRED: '',
			CARD_CVV: '',
		/*}*/
	};

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const CONSTANTS = {
	bedRadioSetting,
	initialState,
	roomSelectSetting,
	workRadioSetting,
	guestRadioSetting,
	arrivalSelectSetting,
	cardRadioSetting,
	stepConstants,
};

export {
	bedRadioSetting,
	initialState,
	roomSelectSetting,
	workRadioSetting,
	guestRadioSetting,
	arrivalSelectSetting,
	cardRadioSetting,
	stepConstants,
};

export default CONSTANTS;