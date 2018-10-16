import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

/* components */
import Input from './Input.js'
import Radio from './Radio.js';

/* tools */
import CONSTANTS, { cardRadioSetting } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

/*Шаг 1 Наличие мест*/
class Step2 extends Component {
	onClick() {
		const
			{ onNextStepClick } = this.props,
			bookButton = document.getElementById('react-activation');
			
		bookButton.disabled = true;
			
		onNextStepClick();
	}
	
	render() {
		const { STEP, onPrevStepClick } = this.props;
		
		return <div className={`step-view ${STEP === 3 && 'is-active'}`}>
			<div className="container">
				<div className="container-fluid">
					<p className="step">Step 3</p>

					<div className="row">
						<div className="col-12">
							<div className="pay">
								<div className="pay__title">Выберите способ оплаты</div>
								<div className="pay__subtitle">
									Способы оплаты
								</div>
								
								<Radio setting={cardRadioSetting} parent={'Step1'} type={'cardtype'} />

								<div className="pay__method-container">
									<div className="visa-card">
										<div className="visa-card__container">
											<div className="visa-card__section">
												<Input setting={{name: 'Номер карты', field: 'CARD_NUMBER', placeholder: '**** **** **** ****'}} />
											</div>
										</div>

										<div className="visa-card__container">
													<Input setting={{name: 'Срок действия', field: 'CARD_EXPIRED', placeholder: 'ММ.ГГ'}} />
													<Input setting={{name: 'Код безопасности', field: 'CARD_CVV', placeholder: '***'}} />
										</div>
									</div>
								</div>

								<div className="pay__button-container">
									<button
										onClick={() => onPrevStepClick(STEP - 1)}
										className="btn"
									>
										Условия моего бронирования
									</button>
									<button
										onClick={this.onClick.bind(this)}
										className="btn"
									>
										Оплатить и отправить завпрос
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

const
	mapStateToProps = ({ STEP }) => {
		return {
			STEP,
		};
	},
	mapDispatchToProps = dispatch => ({
		onNextStepClick: () => dispatch({type: 'CHANGE_STEP'}),
		onPrevStepClick: (STEP) => dispatch({type: 'CHANGE_STEP', STEP}),
		// onBookFinishClick: () => dispatch({type: 'FINISH_BOOK'}),
	});

const Step2Redux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Step2)

export default Step2Redux;