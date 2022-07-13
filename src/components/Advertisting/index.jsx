import React from 'react';
import './Advertising.scss';
import Adv from 'assets/adv.png';
import AdvMobile from 'assets/advMobile.png';
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
                    <div className="advertising_right">
                        <img src={Adv} alt="Adv"/>
                    </div>
                    <div className="advertising_right advertising_right-mobile">
                        <img src={AdvMobile} alt="AdvMobile"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertising;
