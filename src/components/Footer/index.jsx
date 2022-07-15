import React, {useState} from 'react';

import GooglePlay from 'assets/google-play.svg';
import AppStore from 'assets/app-store.svg';

import './Footer.scss'
import classNames from "classnames";

const Footer = () => {
    const [tooltipActive, setTooltipActive] = useState(false)
    return (
        <div className="block-footer" id="footer">
            <div className="container">
                <footer>
                    <div className="footer-top">
                        <div className="app-link">
                            <a href="https://play.google.com/store/apps/details?id=io.decentury.myway">
                                <img src={GooglePlay} alt="GooglePlay"/>
                            </a>
                            <a href="https://apps.apple.com/ru/app/my-way-%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%B5%D0%BA/id1602599041">
                                <img src={AppStore} alt="AppStore"/>
                            </a>
                        </div>
                        <div className="support cursor" onClick={() => {
                            navigator.clipboard.writeText('support@smartsolutionsapps.ru')
                            setTooltipActive(true)
                            setTimeout(() => setTooltipActive(false), 1500)
                        }}>
                            support@smartsolutionsapps.ru
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <a
                            className="footer-bottom-button agreement cursor"
                            target="_blank"
                            href="http://test-front.ru/my-way/pdf/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.pdf"
                        >
                            Пользовательское соглашение
                        </a>
                        <a className="footer-bottom-button policy cursor"
                           target="_blank"
                           href="http://test-front.ru/my-way/pdf/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf">
                            Политика конфиденциальности
                        </a>
                    </div>
                    <span className={classNames("tooltip cursor", {"tooltip-active": tooltipActive})}>
                        Скопирован в буфер
                    </span>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
