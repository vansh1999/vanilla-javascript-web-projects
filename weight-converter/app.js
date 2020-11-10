const input_weight = document.getElementById('input-weight-counter');

var ounce = document.getElementById('ounce');
var gm = document.getElementById('gm');
var kg = document.getElementById('kg');

let weight_arr = [];

function convert(e) {
    e.preventDefault();
    let pound = input_weight.value;

    ounce = pound * 16;
    gm = pound * 453.59;
    kg = pound * 0.453;

    document.getElementById("ou-class").classList.remove('invisible');
    document.getElementById("gm-class").classList.remove('invisible');
    document.getElementById("kg-class").classList.remove('invisible');

    document.getElementById('ounce').innerHTML = ounce;
    document.getElementById('gm').innerHTML = gm;
    document.getElementById('kg').innerHTML = kg;

    if (pound == 0) {
        document.getElementById("ou-class").classList.add('invisible');
        document.getElementById("gm-class").classList.add('invisible');
        document.getElementById("kg-class").classList.add('invisible');
    }

    weight_arr.push(pound);
    localStorage.setItem('weights', JSON.stringify(weight_arr));
    weight_data = JSON.parse(localStorage.getItem('weights'));


}

input_weight.addEventListener('change', convert);





