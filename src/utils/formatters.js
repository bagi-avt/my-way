import {setCode} from "../api";

export const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
}
export const onPhoneInput = (e, setTel) => {
    const input = e.target;
    let inputValue = getInputNumbersValue(input);
    let formattedInputValue = '';
    if (['7', '8', '9'].includes(inputValue[0])) {
        if (inputValue[0] === '9') inputValue = '7' + inputValue
        const firstSymbols = (inputValue[0] === '8') ? '8' : '+7';
        formattedInputValue = firstSymbols;
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
export const onAnswerInput = async (e, answer, setAnswer, setStep, tel, setErrors) => {
    const input = e.target;
    let inputValue = getInputNumbersValue(input);
    setAnswer(inputValue)
    if (answer.length === 5) {
        await setCode(JSON.stringify({phone_number: getNumber(tel), code: inputValue}))
            .then((data) => {
                console.log(data)
                setStep(3)
            })
            .catch((error) => {
                console.log(error)
                setErrors(true)
            })
    }
}
export const getNumber = (number) => {
    let value = number.replace(/\D/g, "").slice(1);
    value = '+7' + value;
    return value
}
