const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
const cashDrawerDiv = document.getElementById('cash-drawer')
let paragraphs = cashDrawerDiv.getElementsByTagName('p');
let statusParagraph = document.createElement('p');


let reverseHelper = 0;

let nameMapping = {
    "PENNY": "Pennies",
    "NICKEL": "Nickels",
    "DIME": "Dimes",
    "QUARTER": "Quarters",
    "ONE": "Ones",
    "FIVE": "Fives",
    "TEN": "Tens",
    "TWENTY": "Twenties",
    "ONE HUNDRED": "Hundreds"
};

function checkCashRegister(price, cash, cid) {

    let change = parseFloat((cash - price).toFixed(2));
    let sumCid = parseFloat(cid.reduce((acc, currentVal) => acc + currentVal[1], 0));

    let changeMoney = [
        ["ONE HUNDRED", 0],
        ["TWENTY", 0],
        ["TEN", 0],
        ["FIVE", 0],
        ["ONE", 0],
        ["QUARTER", 0],
        ["DIME", 0],
        ["NICKEL", 0],
        ["PENNY", 0]
    ]

    if (change > sumCid) {
        changeDueDiv.innerHTML = '';
        statusParagraph.innerText = "Status: INSUFFICIENT_FUNDS"
        changeDueDiv.appendChild(statusParagraph);
        return { status: "INSUFFICIENT_FUNDS", change: [] };

    } else if (change === sumCid) {
        changeDueDiv.innerHTML = '';
        statusParagraph.innerText = "Status: CLOSED"
        changeDueDiv.appendChild(statusParagraph);
        cid.forEach(item => {
            if (item[1] !== 0) {
                let paragraph = document.createElement("p");
                paragraph.innerText = `${item[0]}: $${item[1]}`;
                changeDueDiv.appendChild(paragraph);
            }
        });
        return { status: "CLOSED", change: cid };

    } else {
        let result = [];
        cid = cid.reverse(); //highest to lowest order
        if (reverseHelper > 0) { // maybe not needed
            cid = cid.reverse();
        }
        reverseHelper += 1;
        let currency = [
            ["ONE HUNDRED", 100],
            ["TWENTY", 20],
            ["TEN", 10],
            ["FIVE", 5],
            ["ONE", 1],
            ["QUARTER", 0.25],
            ["DIME", 0.10],
            ["NICKEL", 0.05],
            ["PENNY", 0.01]
        ];
        for (let i = 0; i < cid.length; i++) {
            while (change >= currency[i][1] && cid[i][1] > 0) {
                change -= currency[i][1];
                change = parseFloat(change.toFixed(2))
                // console.log(`change ${change}`)
                cid[i][1] -= currency[i][1];
                cid[i][1] = parseFloat(cid[i][1].toFixed(2))
                // console.log(`cid ${cid[i][1]}`)
                changeMoney[i][1] += currency[i][1];
                changeMoney[i][1] = parseFloat(changeMoney[i][1].toFixed(2))
                // console.log(`changeMoney[i][1] ${changeMoney[i][1]}`)
            }
            if (changeMoney[i][1] > 0) {
                result.push(changeMoney);
            }
        }

        if (change > 0) {
            changeDueDiv.innerHTML = '';
            statusParagraph.innerText = "Status: INSUFFICIENT_FUNDS";
            changeDueDiv.appendChild(statusParagraph);
            return { status: "INSUFFICIENT_FUNDS", change: [] };

        }
        changeDueDiv.innerHTML = '';
        statusParagraph.innerText = "Status: OPEN";
        changeDueDiv.appendChild(statusParagraph);
        changeMoney.forEach(item => {
            if (item[1] !== 0) {
                let paragraph = document.createElement("p");
                paragraph.innerText = `${item[0]}: $${item[1]}`;
                changeDueDiv.appendChild(paragraph);
            }
        });
        return { status: "OPEN", change: result };

    }
}


purchaseBtn.addEventListener('click', function () {

    let test = ''
    for (let j = 0; j < cashInput.value.length; j++) {
        test += cashInput.value[j]
        if (cashInput.value[j] === '.') {
            test += cashInput.value[j + 1]
            test += cashInput.value[j + 2]
            break;
        }
    }

    let cash = parseFloat(cashInput.value);
    cash = parseFloat(cash.toFixed(2))

    if (isNaN(cash)) {
        return;
    } else if (parseFloat(test) < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    else if (cash === price) {
        changeDueDiv.innerHTML = `<p>No change due - customer paid with exact cash</p>`
        return;
    } else {
        console.log(checkCashRegister(price, cash, cid))
    }



    for (let i = 0; i < paragraphs.length; i++) {
        let p = paragraphs[i];
        let pText = p.innerText.split(':')[0]; // Text vor dem Doppelpunkt

        // Finde den entsprechenden Wert im cid Array
        for (let j = 0; j < cid.length; j++) {
            let [name, value] = cid[j];
            if (nameMapping[name] === pText) {
                p.innerText = `${pText}: $${value}`;
                break;
            }
        }
    }

});

let price = 3.26;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];


for (let i = 0; i < paragraphs.length; i++) {
    let p = paragraphs[i];
    let pText = p.innerText.split(':')[0]; // Text vor dem Doppelpunkt

    // Finde den entsprechenden Wert im cid Array
    for (let j = 0; j < cid.length; j++) {
        let [name, value] = cid[j];
        if (nameMapping[name] === pText) {
            p.innerText = `${pText}: $${value}`;
            break;
        }
    }
}

// care for cid reverse 