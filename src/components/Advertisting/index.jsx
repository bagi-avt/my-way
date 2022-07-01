import React from 'react';
import './Advertising.scss';

const Advertising = () => {
    return (
        <div className="section-advertising">
            <div className="container">
                <h2>Почему наши пользователи выбирают трекер привычек MyWay?</h2>
                <div className="advertising">
                    <div className="advertising_left">
                        <h3 className="advertising_left-title">Неограниченное количество привычек</h3>
                        <p className="advertising_left-text">Вы можете создать столько привычек, сколько захотите</p>
                    </div>
                    <div className="advertising_right" style={{backgroundImage: `url(${require('assets/adv.png')})`}}/>
                    <div className="advertising_right advertising_right-mobile" style={{backgroundImage: `url(${require('assets/advMobile.png')})`}}/>
                </div>
            </div>
        </div>
    );
};

export default Advertising;
