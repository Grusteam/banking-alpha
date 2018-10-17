import UTILS, {  } from './Utils.js';

const
	steps = {
		1: [
			{name: 'Моб телефон', field: 'PHONE', defaultValue: ''},
			{name: 'Название компании', field: 'COMPANY', defaultValue: ''},
			{name: 'ИНН', field: 'INN_NUM', defaultValue: ''},
			{name: 'Фамилия', field: 'SURNEME', defaultValue: ''},
			{name: 'Имя', field: 'NAME', defaultValue: ''},
			{name: 'Отчество', field: 'SECOND_NAME', defaultValue: ''},
			{name: 'Эл почта', field: 'EMAIL', defaultValue: ''},
		],
		4: [
			{name: 'Паспорт руководителя', field: 'CHIEF_PASSPORT', defaultValue: ''},
			{name: 'Паспорт учредителя', field: 'OWNER_PASSPORT', defaultValue: ''},
			{name: 'ИНН', field: 'INN', defaultValue: ''},
			{name: 'ОГРН', field: 'OGRN', defaultValue: ''},
			{name: 'Эл архив ИФНС', field: 'IFNS', defaultValue: ''},
		],
		5: [
			{name: 'Устав', field: 'ORDER', defaultValue: ''},
			{name: 'Протокол', field: 'RECORD', defaultValue: ''},
			{name: 'Сведения об учредителях', field: 'OWNER_INFO', defaultValue: ''},
			{name: 'Фин отчетность', field: 'FINANCE', defaultValue: ''},
			{name: 'СНИЛС', field: 'SNILS', defaultValue: ''},
		],
	};

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const CONSTANTS = {
	steps,
};

export {
	steps,
};

export default CONSTANTS;