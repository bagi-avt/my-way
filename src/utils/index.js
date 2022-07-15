export const isIOS = () => {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
export const isAndroid = () => {
    return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}
export const redirect = (close) => {
    if(isIOS()){
        window.location.replace("https://apps.apple.com/ru/app/my-way-%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80-%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%B5%D0%BA/id1602599041");
    } else if (isAndroid()) {
        window.location.replace("https://play.google.com/store/apps/details?id=io.decentury.myway");
    } else {
        close();
        window.location.hash = '#footer';
    }
}
