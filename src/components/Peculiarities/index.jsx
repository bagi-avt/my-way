import React from 'react';

import CloseSquare from 'assets/close-square.svg';
import Chat from 'assets/chat.svg';

import './Peculiarities.scss'

const Peculiarities = () => {
    return (
        <div className="section-peculiarities">
            <div className="container">
                <div className="section-peculiarities-list">
                    <div className="section-peculiarities-item section-peculiarities-item_little">
                        <img src={CloseSquare} alt="CloseSquare"/>
                        <h4 className="section-peculiarities-item_little-title">Без рекламы</h4>
                        <div className="section-peculiarities-item_little-text">Мы против рекламы и не хотим беспокоить
                            ей наших пользователей
                        </div>
                    </div>
                    <div className="section-peculiarities-item section-peculiarities-item_little">
                        <img src={Chat} alt="Chat"/>
                        <h4 className="section-peculiarities-item_little-title">Напоминания</h4>
                        <div className="section-peculiarities-item_little-text"> Получайте ненавязчивые уведомления
                            вовремя
                        </div>
                    </div>
                    <div className="section-peculiarities-item section-peculiarities-item_big">
                        <div className="section-peculiarities-item_big_left">
                            <h3 className="section-peculiarities-item_big_left-title">Статистика и графики</h3>
                            <p className="section-peculiarities-item_big_left-text">Получайте полный обзор вашего прогресса</p>
                        </div>
                        <div className="section-peculiarities-item_big_right peculiarities-bg-desktop"
                             style={{backgroundImage: `url(${require('assets/peculiarities.png')})`}}/>
                        <div className="section-peculiarities-item_big_right section-peculiarities-item_big_right-mobile"
                            style={{backgroundImage: `url(${require('assets/peculiarities-mobile.svg').default})`}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peculiarities;
