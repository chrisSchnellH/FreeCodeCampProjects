const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
let regex1 = /^1 \d{3}-\d{3}-\d{4}$/; /*1 555-555-5555*/
let regex2 = /^1 \(\d{3}\) \d{3}-\d{4}$/; /*1 (555) 555-5555*/
let regex3 = /^1\(\d{3}\)\d{3}-\d{4}$/; /*1(555)555-5555*/
let regex4 = /^1 \d{3} \d{3} \d{4}$/; /*1 555 555 5555*/
let regex5 = /^\d{10}$/; /*5555555555*/
let regex6 = /^\d{3}-\d{3}-\d{4}$/; /*555-555-5555*/
let regex7 = /^\(\d{3}\)\d{3}-\d{4}$/; /*(555)555-5555*/

checkBtn.addEventListener('click', function () {
    if (userInput.value === '') {
        alert('Please provide a phone number');
    } else {
        console.log(regex1.test(userInput.value))
        switch (true) {
            case (regex1.test(userInput.value)):
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
                break;
            case (regex2.test(userInput.value)):
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
                break;
            case (regex3.test(userInput.value)):
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
                break;
            case (regex4.test(userInput.value)):
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
                break;
            case (regex5.test(userInput.value)):
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
                break;
            case (regex6.test(userInput.value)):
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
                break;
            case (regex7.test(userInput.value)):
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
                break;

            default:
                console.log(userInput.value)
                resultsDiv.innerHTML += `<p>Invalid US number: ${userInput.value}</p>`;
        }
    }
})

clearBtn.addEventListener('click', function () {
    userInput.value = '';
    resultsDiv.innerText = '';
})
