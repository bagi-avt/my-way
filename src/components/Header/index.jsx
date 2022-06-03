import React from 'react';

import Logo from 'assets/logo.svg';
import Arrow from 'assets/arrow.svg';

import './Header.scss';

const Header = ({setPopupActive}) => {
    return (
        <div className="block-header">
            <div className="container">
                <header className="header">
                    <img src={Logo} alt="logo"/>
                    <div className="header-text">Трекер привычек</div>
                    <button className="header-button cursor" onClick={()=>setPopupActive(true)}><span>Войти</span> <img src={Arrow} alt="Arrow"/></button>
                </header>
            </div>
        </div>
    );
};

export default Header;
