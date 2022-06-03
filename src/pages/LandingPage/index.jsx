import React, {useState} from 'react';

import Header from "../../components/Header";
import Main from "../../components/Main";
import Advertising from "../../components/Advertisting";
import Slides from "../../components/Slides";
import Articles from "../../components/Articles";
import Peculiarities from "../../components/Peculiarities";
import Footer from "../../components/Footer";

import './LandingPage.scss'

const Landing = () => {
    const [popupActive, setPopupActive] = useState(false);
    return (
        <>
            <Header setPopupActive={setPopupActive}/>
            <Main popupActive={popupActive} setPopupActive={setPopupActive}/>
            <Advertising/>
            <Slides/>
            <Articles/>
            <Peculiarities/>
            <Footer/>
        </>
    );
};

export default Landing;
