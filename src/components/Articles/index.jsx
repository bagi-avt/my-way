import React from 'react';

import './Articles.scss';
import ArticlesImg from 'assets/articles.png';
import ArticlesMobileImg from 'assets/articles-mobile.png';

const Articles = () => {
    return (
        <div className="section-articles">
            <div className="container">
                <div className="articles">
                    <div className="articles_left">
                        <h3 className="articles_left-title">Статьи</h3>
                        <p className="articles_left-text">Наши статьи помогут вам больше узнать о том, как эффективнее работать с привычками, помогут найти мотивацию. Вы также, безусловно, найдете в них новые направления для саморазвития, которые помогут вам стать лучшей версией себя</p>
                    </div>
                    <div className="articles_right">
                        <img src={ArticlesImg} alt="ArticlesImg"/>
                    </div>
                    <div className="articles_right articles_right-mobile">
                        <img src={ArticlesMobileImg} alt="ArticlesMobileImg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
