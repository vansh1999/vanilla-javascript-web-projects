// const main = document.getElementById('main');
const add_user = document.getElementById('add_user');
const double_user = document.getElementById('double_user');
const show_user = document.getElementById('show_user');
const sort_user = document.getElementById('sort_user');
const total_user = document.getElementById('total_user');


// it will be array of objects ,person -> firstname , lastname & wealth
let data = [];

console.log(data);

getRandomUser();
getRandomUser();
getRandomUser();
// Fetch random user and money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    var user = data.results[0]

    var newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000)
    }

    addData(newUser);
}


// double money function

function doubleMoney() {

    data = data.map(item => {
        return { ...item, money: item.money * 2 }
    })

    updateDom();

}

// sort money
function sortMoney() {

    data.sort((a, b) => {
        return b.money - a.money
    })


    updateDom();

}

// filter money
function filterMoney() {

    data = data.filter(function (item) {
        item.money > 500;
    })   // issue here if used normal function , all removed

    updateDom();

}

// total wealth
function totalMoney() {
    var total_money = data.reduce((acc, cur) => (+acc + +cur.money), 0)

    console.log(total_money);

    const total_money_el = document.createElement('div');
    total_money_el.innerHTML = `<h3> Total Money: <strong> ${total_money} </strong> </h3>`;
    main.appendChild(total_money_el);

    // updateDom();

}


// adding new object to data array at top
function addData(obj) {
    data.push(obj);
    updateDom();
}


// update DOM 
function updateDom(providedData = data) {
    // clear main div
    main.innerHTML = '<h2> <strong>Person</strong> Wealth </h2>'

    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person')
        element.innerHTML = `<strong> ${item.name} </strong> ${item.money}`;
        main.appendChild(element);

    })
}




// add user button
add_user.addEventListener('click', getRandomUser)

// double button
double_user.addEventListener('click', doubleMoney)

// sort button
sort_user.addEventListener('click', sortMoney);

// filter button
show_user.addEventListener('click', filterMoney);

// total button
total_user.addEventListener('click', totalMoney);





