const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

convertBtn.addEventListener('click', function () {
    let input = parseInt(numberInput.value);

    if (isNaN(input)) {
        outputDiv.innerHTML = "Please enter a valid number";
        return;
    }
    if (input < 1) {
        outputDiv.innerHTML = "Please enter a number greater than or equal to 1";
    } else if (input >= 4000) {
        outputDiv.innerHTML = "Please enter a number less than or equal to 3999";
    } else {
        outputDiv.innerHTML = '';
        outputDiv.innerHTML = `${convertToRoman(input)}`
    }

});

const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
];

function convertToRoman(num) {
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            // console.log(romanNumerals[i], num)
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}
