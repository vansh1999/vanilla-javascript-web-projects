const search = document.getElementById('searchrecipe'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    resultHeading = document.getElementById('result-heading'),
    meals = document.getElementById('meals'),    //mealsEl
    singleMeal = document.getElementById('single-meal')  //single_mealEl



function searchMeal(e) {
    e.preventDefault();

    let term = search.value;

    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                resultHeading.innerHTML = `<h4>Search results for '${term}':</h4>`;

                if (data.meals == null) {
                    resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
                } else {
                    meals.innerHTML = data.meals.map(meal =>
                        `
                        <div class="card meal mt-2" style="width: 18rem;">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                        <div class="card-body">
                          
                          <div class="meal-info" data-mealID="${meal.idMeal}"> 
                          <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="badge badge-success badge-pill large">${meal.strCategory}</p>
                          <a href="#" class="btn btn-primary">More</a>
                          </div>
                          
                        </div>
                      </div>

                        `
                    ).join('')
                }
            });

        // clear input 
        search.value = "";
        // clear previous single added meals
        singleMeal.innerHTML = "";



    } else {
        alert("Please Select a Meal !")
    }

}


// get random meal

function RandomMeal(e) {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const meal = data.meals[0];
            meals.innerHTML = "";
            addMealToDom(meal);
        })
}

// end random meal

// get meal by ID

function getMealById(mealid) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0]
            console.log(meal);
            addMealToDom(meal);
        })
}

// add meal to dom

function addMealToDom(meal) {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
    }
    console.log(ingredients);
    singleMeal.innerHTML = `
    <div class="card mb-3">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>  
      
    

    ${ingredients.map(ing => `<div class="badge badge-warning">
    ${ing}
    </div>`).join('')}
    
    </div>
  </div>
  
    `
}


submit.addEventListener('submit', searchMeal)

random.addEventListener('click', RandomMeal);
// single meal -> 

meals.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    })
    console.log(mealInfo);

    if (mealInfo) {
        const mealId = mealInfo.getAttribute('data-mealID')
        getMealById(mealId);
    }

})




