import React from 'react';
import classNames from "classnames";

import './Tariff.scss'
const Tariff = ({active, setActive, className}) => {
    return (
        <ul className={classNames("tariff-list", className)}>
            <li className={classNames("tariff-item cursor", {"tariff-item-active": active === 1 })} onClick={()=>setActive(1)}>
                <p className="tariff-item_time">1 месяц</p>
                <p className="tariff-item_price">299&nbsp;₽</p>
                <div className="tariff-item_description">Ежемесячная <br/>оплата</div>
            </li>
            <li className={classNames("tariff-item tariff-saving cursor", {"tariff-item-active": active === 2 })} onClick={()=>setActive(2)}>
                <p className="tariff-item_time">1 год</p>
                <p className="tariff-item_price">1590&nbsp;₽</p>
                <div className="tariff-item_description">Оплата 1590&nbsp;₽ <br/> за весь год</div>
            </li>
        </ul>
    );
};

export default Tariff;
