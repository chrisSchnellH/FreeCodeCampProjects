const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result")

checkBtn.addEventListener('click', function () {
    let input = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (input === "") {
        alert("Please input a value");
        return none;
    }
    if (isPalindrome(input)) {
        resultDiv.innerHTML = `${textInput.value} is a palindrome.`
        resultDiv.classList.add("text-success");
    } else {
        resultDiv.innerHTML = `${textInput.value} is not a palindrome.`
        resultDiv.classList.add("text-danger");
    }
})

console.log(textInput)
let input = textInput.replace(/[^\w]/g, '');

function isPalindrome(input) {

    let counter = 0;

    while (counter < (input.length / 2)) {
        if (input[counter] !== input[input.length - (counter + 1)]) {
            return false;
        }
        counter++;
    }

    return true;
}

