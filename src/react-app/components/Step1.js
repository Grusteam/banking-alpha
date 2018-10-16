import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer.js'

/* components */
import Radio from './Radio.js';
import Select from './Select.js';

/* tools */
import CONSTANTS, { bedRadioSetting, roomSelectSetting } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

/*Шаг 1 Наличие мест*/
class Step1 extends Component {
	render() {
		const { STEP, onNextStepClick } = this.props;
		
		return <div className={`step-view ${STEP === 1 && 'is-active'}`}>
			<div className="container">
					<div className="container-fluid">
						<p className="step">step 1</p>
						{/*<div className="row">
							<div className="col-12">
								<div className="availability">
									<h2 className="availability__title">Наличие мест</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="availability__container">
									<div className="row">
										<div className="col-3">
											<div className="availability__section">
												<div className="availability__section-title">Дата заезда</div>
												<div className="availability__section-date">
													<a href="" className="availability__popup-activator">Ср, 10 окт , 2018</a>
												</div>
												<div className="availability__section-time">с 15:00</div>
											</div>
										</div>
							
										<div className="col-3">
											<div className="availability__section">
												<div className="availability__section-title">Дата выезда</div>
												<div className="availability__section-date">
													<a href="" className="availability__popup-activator">Ср, 10 окт , 2018</a>
												</div>
												<div className="availability__section-time">с 15:00</div>
											</div>
										</div>
							
										<div className="col-3">
											<div className="availability__section">
												<div className="availability__section-title">Гости</div>
												<div className="availability__section-guests">
													<a href="" className="availability__popup-activator">2 взрослых</a>
												</div>
											</div>
										</div>
							
										<div className="col-3">
											<div className="availability__section">
												<button className="btn">Изменить параметры поиска</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>*/}
							
						<div className="row">
							<div className="col-12">
								<div className="row">
									<div className="col-12 reservation-table">
										<div className="row no-gutters reservation-table__row reservation-table__row--title">
											<div className="col-3 reservation-table__cell">Тип номера</div>
											<div className="col-2 reservation-table__cell">Вмещает</div>
											<div className="col-2 reservation-table__cell">Цена</div>
											<div className="col-2 reservation-table__cell">Выбор номера</div>
											<div className="col-3 reservation-table__cell"></div>
										</div>
							
										<div className="row no-gutters reservation-table__row">
											<div className="col-3 reservation-table__cell reservation-table__cell--type">
												<div className="reservation-table__room-type">
													<a className="reservation-table__open-lnk">Двухместный номер эконом-класса с 1 кроватью или 2 отдельными кроватями</a>
												</div>
												
												<Radio setting={bedRadioSetting} parent={'Step1'} exterior={'withbg'} />
							
												<ul className="reservation-table__conveniences-list">
													<li className="reservation-table__conveniences-item">Кондиционер</li>
													<li className="reservation-table__conveniences-item">Собственная ванная комната</li>
													<li className="reservation-table__conveniences-item">Телевизор с плоским экраном</li>
													<li className="reservation-table__conveniences-item">Душ</li>
												</ul>
											</div>
											<div className="col-2 reservation-table__cell">2</div>
											<div className="col-2 reservation-table__cell">1200</div>
											<div className="col-2 reservation-table__cell">
												<Select parent={'Step1'} setting={roomSelectSetting} />
											</div>
											<div className="col-3 reservation-table__cell reservation-table__cell--result">
												<button
													onClick={onNextStepClick}
													className="btn"
												>
													Я бронирую
												</button>
											</div>
										</div>
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
	});

const Step1Redux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Step1)

export default Step1Redux;