const submit = document.getElementById('submit');
const searchCity = document.getElementById('search-city');
const result = document.getElementById('result');
const resultHeading = document.getElementById('result-heading');

function getCityFun(e) {

    e.preventDefault();

    let city = searchCity.value;

    if (city.trim()) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbcf8d6b286458ad4ea994cb2a9af5f6`)
            .then(res => res.json())
            .then(data => {

                console.log(data);

                let kelvin = data.main.temp;
                let cel = kelvin - 273.15;
                cel = cel.toPrecision(2);

                if (data.cod === "404") {
                    resultHeading.innerHTML = "City Not Found"
                } else {
                    result.innerHTML = `
                    
                    <div class="card mt-5 mx-auto" style="width: 18rem;">
                    <img src="icon.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-title text-center">${data.name} (${data.sys.country})</h4>
                      <h5 class="card-text text-center">Weather - ${data.weather[0].description}</h5>
                      <h5 class="card-text text-center">Temprature - ${cel} C </h5>
                      <h5 class="card-text text-center">Wind Speed - ${data.wind.speed}</h5>
                      
                    </div>
                  </div>
                    
                    `
                }



            })
    } else {
        alert("Enter City First ! ")
    }

    searchCity.value = "";



}


submit.addEventListener('submit', getCityFun);

// things to remember

// <img src="${data.weather[0].icon}" class="card-img-top" alt="..."></img>   -> icon not in api

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbcf8d6b286458ad4ea994cb2a9af5f6` -> remember to add https://