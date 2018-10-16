import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

/* components */
import Input from './Input.js'
import Radio from './Radio.js';
import Check from './Check.js';
import Select from './Select.js';

/* tools */
import CONSTANTS, { workRadioSetting, guestRadioSetting, arrivalSelectSetting } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

/*Шаг 2 введите данные*/
class Step2 extends Component {
	render() {
		const { STEP, onNextStepClick, GUEST_STATE } = this.props;
		
		return <div className={`step-view ${STEP === 2 && 'is-active'}`}>
			<div className="container">
				<div className="container-fluid">
					<p className="step">step 2</p>

					<div className="row">
						<div className="col-12">
							<h2>Ведите свои данные</h2>
							<div className="info">
								
								<Radio setting={workRadioSetting} parent={'Step2'} exterior={'clear'} />

								<div className="info__container info__container--row">
									<Input setting={{name: 'Имя', field: 'USER_NAME'}} />
									<Input setting={{name: 'Фамилия', field: 'USER_SURNAME'}} />
								</div>

								<div className="info__container info__container--column">
									<Input setting={{name: 'Адрес электронной почты', field: 'USER_EMAIL'}} />
								</div>

								<div className="info__container info__container--column">
									<Input setting={{name: 'Номер телефона', field: 'USER_PHONE'}} />
								</div>

								<div className="info__container info__container--column">
									<div className="info__guest-select">
										
										<Radio setting={guestRadioSetting} parent={'Step2'} type="clear" />
										
										<div className={`info__select-type ${GUEST_STATE == 1 && 'is-active'}`}>
											<div className="info__container info__container--row">
												<div className="info__guests-container">
													<Input setting={{name: 'Введите фамилию и имя гостя', field: 'GUEST_FULLNAME'}} />
												</div>

												<div className="info__guests-container">
													<Input setting={{name: 'Введите e-mail гостя', field: 'GUEST_MAIL'}} />
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>

							<h2>Задайте вопрос</h2>
							<div className="info">
								<div className="info__container info__container--column">
									<div className="info__title">Расскажите нам о ваших особых пожеланиях</div>
									<div className="info__subtitle">Пожалуйста, напишите свои запросы на английском или на тайском. Администрация объекта размещения не может гарантировать
										выполнение особых пожеланий, но сделает для этого все возможное. Вы всегда можете оставить особое пожелание после
										завершения бронирования!</div>
									<Input setting={{field: 'USER_ANNOTATION', type: 'textarea'}} />
								</div>
								
								<Check parent={'Step2'} setting={{title:'Я бы хотел тихий номер', field: 'USER_SILENT_NUMBER',}}/>

								<div className="info__container info__container--row">
									<b>Время прибытия: пятница, 12 октября 2018 г,</b>
									<Select parent={'Step2'} setting={arrivalSelectSetting} />
									- местное время
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-2">
							<div className="info__next-button">
							<button
								onClick={onNextStepClick}
								className="btn"
							>
								Далее
							</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

const
	mapStateToProps = ({ STEP, GUEST_STATE }) => {
		return {
			STEP,
			GUEST_STATE,
		};
	},
	mapDispatchToProps = dispatch => ({
		onNextStepClick: () => dispatch({type: 'CHANGE_STEP'}),
	});

const Step2Redux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Step2)

export default Step2Redux;