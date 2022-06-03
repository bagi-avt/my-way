import React, {useState} from 'react';

import './Main.scss'
import Popup from "components/Popup";
import Tariff from "../Tariff";

const Main = ({popupActive, setPopupActive}) => {
    const [tariffActive, setTariffActive] = useState(1);
    return (
        <div className="main">
            <div className="container">
                <div className="header-text">Трекер привычек</div>
                <h2 className="main-title">Привычка — это мост, перекинутый из нашего сегодня в наше завтра. </h2>
                <p className="main-text">Управляя своими привычками, вы управляете своим будущим</p>
                <Tariff  active={tariffActive} setActive={setTariffActive}/>
                <button onClick={()=>setPopupActive(true)} className="main-button cursor">Оформить подписку</button>
            </div>
            <Popup active={popupActive} setActive={setPopupActive} tariffActive={tariffActive} setTariffActive={setTariffActive}/>
        </div>

    );
};

export default Main;
