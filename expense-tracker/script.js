balance = document.getElementById('balance');
moneyplus = document.getElementById('money-plus');
moneyminus = document.getElementById('money-minus');
list = document.getElementById('list');

form = document.getElementById('form');
text = document.getElementById('text');
amount = document.getElementById('amount');


// var dummyTransactions = [
//     { id: 1, text: 'add1', amount: 100 },
//     { id: 2, text: 'min1', amount: -50 },
//     { id: 3, text: 'add2', amount: 200 },
//     { id: 4, text: 'min2', amount: -100 },
// ]

const localStorageTransaction = JSON.parse(localStorage.getItem('Transaction'));

let Transaction = localStorage.getItem('Transaction') !== null ? localStorageTransaction : [];



// adding transction
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert("Please add new Transaction !")
    } else {
        const transaction_obj = {
            id: randomID(),
            text: text.value,
            amount: +amount.value
        }
        Transaction.push(transaction_obj);
        addTransactionDOM(transaction_obj);
        updateValues();
        updateLocalStorage();

    }


    text.value = '';
    amount.value = '';

}



function randomID() {
    console.log(Math.floor(Math.random() * 1000000));
}


// Add Transaction to DOM

function addTransactionDOM(transaction) {


    // get the sign
    let sign = transaction.amount < 0 ? '-' : '+';

    let item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'list-group-item' : 'list-group-item');

    item.innerHTML = `
        ${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span><button
        class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button></li>
    `;

    list.appendChild(item);

}

// Remove transaction by ID
function removeTransaction(id) {

    Transaction = Transaction.filter(transaction => transaction.id !== id);
    init();
    updateLocalStorage()
}


// update balance ,income ,  expense 

function updateValues() {

    const amount = Transaction.map(trans =>
        trans.amount
    );


    // var total = 0;
    // for (var i in amount) {
    //     total += amount[i];
    // }
    // console.log(total);

    // const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerHTML = `<h1> $${total} </h1>`;
    moneyplus.innerHTML = `<h5>+$${income}</h5>`;
    moneyminus.innerHTML = `<h5>-$${expense}</h5>`;

}

// update local storage
function updateLocalStorage() {
    localStorage.setItem('Transaction', JSON.stringify(Transaction));
}

// init App
function init() {
    list.innerHTML = "";
    Transaction.forEach(addTransactionDOM);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);


