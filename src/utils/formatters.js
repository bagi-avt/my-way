export const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
}
export const onPhoneInput = (e, setTel) => {
    const input = e.target;
    let inputValue = getInputNumbersValue(input);
    let formattedInputValue = '';
    if (['7', '8', '9'].includes(inputValue[0])) {
        if (inputValue[0] === '9') inputValue = '7' + inputValue
        let firstSymbols = (inputValue[0] === '8') ? '8' : '+7';
        formattedInputValue = firstSymbols
        if (inputValue.length > 1) {
            formattedInputValue += ' (' + inputValue.substring(1, 4);
        }
        if (inputValue.length >= 5) {
            formattedInputValue += ') ' + inputValue.substring(4, 7);
        }
        if (inputValue.length >= 8) {
            formattedInputValue += ' ' + inputValue.substring(7, 9);
        }
        if (inputValue.length >= 10) {
            formattedInputValue += ' ' + inputValue.substring(9, 11);
        }
        setTel(formattedInputValue)
    } else {
        if (inputValue.length) formattedInputValue = '+' + inputValue.substring(0, 16)
        setTel(formattedInputValue)
    }
}
export const onAnswerInput = (e, answer, setAnswer, setStep) => {
    const input = e.target;
    let inputValue = getInputNumbersValue(input);
    setAnswer(inputValue)
    if(answer.length === 5) {
        setStep(3)
    }
}
