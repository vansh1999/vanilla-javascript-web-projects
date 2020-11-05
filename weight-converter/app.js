const input_weight = document.getElementById('input-weight-counter');

var ounce = document.getElementById('ounce');
var gm = document.getElementById('gm');
var kg = document.getElementById('kg');

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





}

input_weight.addEventListener('change', convert);


