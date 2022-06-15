import React, {useState} from 'react';
import classNames from 'classnames';
import {onPhoneInput, onAnswerInput} from "utils/formatters";
import './Popup.scss';
import Tariff from "../Tariff";

import Arrow from 'assets/arrow.svg';
import Logo from 'assets/logo.svg';

const Popup = ({active, setActive, tariffActive, setTariffActive}) => {
    const [step, setStep] = useState(1);
    const [tel, setTel] = useState('');
    const [answer, setAnswer] = useState('')
    const [tooltipActive, setTooltipActive] = useState(false)
    const onPhone = (e) => {
        onPhoneInput(e, setTel)
    }
    const onAnswer = (e) => {
        onAnswerInput(e, answer, setAnswer, setStep)
    }
    const close = () => {
        setActive(false);
        setTel('');
        setAnswer('');
        setStep(1);
    }
    return (
        <div className={classNames("popup", {active: active})} onClick={() => setActive(false)}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <header className='popup-content-header'>
                    {step === 2 && <img src={Arrow} alt="Arrow" className="popup-content-header-back popup-content-header-back_mobile" onClick={() => setStep(1)}/>}
                    <img src={Logo} alt="logo"/>
                </header>
                <div className="popup-close" style={{backgroundImage: `url(${require('assets/close.svg').default})`}}
                     onClick={() => {
                         close()
                     }}/>
                <div className={classNames("step step_tel", {"step-active": step === 1})}>
                    <h3 className="popup-title">Введите номер телефона</h3>
                    <input
                        className="popup-input-tel"
                        type="tel"
                        value={tel}
                        placeholder="+7 (---) --- -- --"
                        maxLength="18"
                        onChange={onPhone}
                    />
                    <button className="popup-button cursor" onClick={() => {
                        setStep(2)
                    }}>Продолжить
                    </button>
                    <p className="popup-text">
                        Нажимая на кнопку «Продолжить», я принимаю условия
                        <a
                            className='cursor'
                            target="_blank"
                            href="http://test-front.ru/my-way/pdf/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf"
                        > Политики конфиденциальности</a>,
                        и <a
                        className='cursor'
                        target="_blank"
                        href="http://test-front.ru/my-way/pdf/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.pdf"
                    >Пользовательского соглашения</a>
                    </p>
                </div>
                <div className={classNames("step step_sms", {"step-active": step === 2})}>
                    <h3 className="popup-title popup-title-answer">
                        <img src={Arrow} alt="Arrow" className='popup-content-back popup-content-back_desktop' onClick={() => setStep(1)}/>
                        Введите код из СМС</h3>
                    <label htmlFor="answerInput" className="answer-list">
                        <span className="answer-item">{answer[0]}</span>
                        <span className="answer-item">{answer[1]}</span>
                        <span className="answer-item">{answer[2]}</span>
                        <span className="answer-item">{answer[3]}</span>
                        <span className="answer-item">{answer[4]}</span>
                        <span className="answer-item">{answer[5]}</span>
                    </label>
                    <input id="answerInput" type="tel" value={answer} maxLength="6" onChange={onAnswer}/>
                    <div className="popup-button-refresh cursor"
                         onClick={() => console.log('Отправить еще раз')}>Отправить еще раз
                    </div>
                </div>
                <div className={classNames("step step_tariff", {"step-active": step === 3})}>
                    <h3 className="popup-title popup-title-tariff">Выберите тариф</h3>
                    <Tariff className='popup-tariff' active={tariffActive} setActive={setTariffActive}/>
                    <button className="popup-button" onClick={() => close()}>Оформить подписку</button>
                    <div className="popup-text">
                        Нажимая Оформить подписку /подтверждая подписку, вы соглашаетесь на списание Компанией указанной
                        суммы, а также даете согласие на периодическое списание Компанией будущих платежей по подписке
                        согласно Пользовательскому соглашению Компании.
                        <span
                            className="cursor"
                            onMouseEnter={() => setTooltipActive(true)}
                            onMouseLeave={() => setTooltipActive(false)}
                            onTouch={() => setTooltipActive(true)}
                        >Подробнее...</span>
                        {tooltipActive && <div className="popup-text-tooltip text-tooltip">
                            По указанным вами платежным реквизитам будет производится списание абонентской платы за
                            подписку на регулярной и периодической основе в зависимости от типа плана подписки, который
                            вы выбираете при покупке подписки. <br/>
                            В конце каждого периода Ваша подписка будет автоматически продлеваться на тех же условиях,
                            если Вы ее не отмените или Компания ее не отменит.<br/>
                            Вы соглашаетесь с тем, что для отмены периодической подписки вам необходимо сделать это до
                            следующей даты продления. В противной случае очередной платеж будет списан.<br/>
                            Вы можете отменить продление подписки через данную страницу нажав на "Отмена подписки", либо
                            связавшись с Компанией по адресу <span className="text-tooltip__email text-tooltip-email">support@smartsolutionsapps.ru.</span>
                            Вы не получите возврат абонентской платы, которую Вы уже внесли за текущий период подписки,
                            и Вы сможете получить доступ к Сервису до окончания текущего периода подписки.
                            <button className="popup-button" onClick={() => {
                                setTooltipActive(false)
                            }}>Закрыть</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
