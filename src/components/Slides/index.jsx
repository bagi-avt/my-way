import React from 'react';
import Check from 'assets/check.svg';
import Check2 from 'assets/check2.svg';

import './Slides.scss';
const Slides = () => {
    return (
        <div className="section-slides">
            <div className="container">
                <h2 className="section-slides-title">Мотивируйте себя</h2>
                <p className="section-slides-text">Для того, чтобы помочь вам удержаться на вашем пути и достичь поставленных целей, у вас будет возможность выбрать один из <span>трех</span>  доступных видов мотивации:</p>
                <ul className="section-slides-list">
                    <li className="section-slides-item">
                        <div className="section-slides-item_title">
                            <img src={Check} alt="Check"/>
                            Финансовая
                        </div>
                        <p className="section-slides-item_text">
                            За достижение своей цели вы будете «отвечать рублем», за каждое невыполненное действие установленная вами сумма будет направляться в выбранный вами благотворительный фонд
                        </p>
                    </li>
                    <li className="section-slides-item">
                        <div className="section-slides-item_title">
                            <img src={Check2} alt="Check"/>
                            Социальная
                        </div>
                        <p className="section-slides-item_text">
                            Публичное заявление о своих намерениях и контроль со стороны друзей будут способствовать формированию и закреплению вашей привычки. А если вашим другом станет единомышленник, работающий над той же привычкой, то конкуренция и совместный контроль друг за другом несомненно помогут вам обоим добиться желаемого результата.
                        </p>
                    </li>
                    <li className="section-slides-item">
                        <div className="section-slides-item_title">
                            <img src={Check} alt="Check"/>
                            Личная
                        </div>
                        <p className="section-slides-item_text">
                            Добавьте вдохновляющие фразы в свои привычки
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Slides;
