import React from 'react';

import './Articles.scss'
const Articles = () => {
    return (
        <div className="section-articles">
            <div className="container">
                <div className="articles">
                    <div className="articles_left">
                        <h3 className="articles_left-title">Статьи</h3>
                        <p className="articles_left-text">Наши статьи помогут вам больше узнать о том, как эффективнее работать с привычками, помогут найти мотивацию. Вы также, безусловно, найдете в них новые направления для саморазвития, которые помогут вам стать лучшей версией себя</p>
                    </div>
                    <div className="articles_right" style={{backgroundImage: `url(${require('assets/articles.png')})`}}/>
                    <div className="articles_right articles_right-mobile" style={{backgroundImage: `url(${require('assets/articles-mobile.svg').default})`}}/>
                </div>
            </div>
        </div>
    );
};

export default Articles;
