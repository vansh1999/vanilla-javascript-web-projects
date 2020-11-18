import reddit from './redditapi';

var searchLimit = 10;

const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const Results = document.getElementById('results');
const Pag = document.getElementById('pag');

document.getElementById("pag").style.display = "block";

searchForm.addEventListener('submit', e => {

    const sortBy = document.querySelector('input[name="sortby"]:checked').value;

    // const searchLimit = document.getElementById('limit').value;
    // var searchLimit = 10;

    const searchTerm = searchInput.value;

    console.log(sortBy, searchLimit, searchTerm);

    if (searchTerm == '') {
        showMessage("Please Fill Details", 'alert-danger');
    }
    searchInput.value = '';


    // search reddit starts
    reddit.search(searchTerm, searchLimit, sortBy)
        .then(rest => {
            console.log(rest);

            let output = '<div class="card-columns">';
            rest.forEach(post => {

                let image = post.preview
                    ? post.preview.images[0].source.url
                    : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';


                output += `
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${truncateString(post.title, 100)}</h5>
                  <h6 class="badge badge-danger mb-2 text-light">${post.subreddit}</h6>
                  <img class="card-img-top" src="${image}" alt="Card image cap">
                  <p class="card-text">${truncateString(post.selftext, 100)}</p>
                  <a href="${post.url}" class="card-link" target="_blank">Visit Link</a>
                  <span class="badge badge-dark">Score: ${post.score}</span>
                </div>
              </div>
                `
            })
            output += '</div>';
            Results.innerHTML = output;

            document.getElementById("pag").style.display = "block";





        });



    // search reddit ends

    e.preventDefault();
});



Pag.addEventListener('click', ShowPag);

function ShowPag() {



    searchLimit += 10;
    console.log("clicked");


    // search reddit starts
    reddit.search(searchTerm, searchLimit, sortBy)
        .then(rest => {
            console.log(rest);

            let output = '<div class="card-columns">';
            rest.forEach(post => {

                let image = post.preview
                    ? post.preview.images[0].source.url
                    : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';


                output += `
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${truncateString(post.title, 100)}</h5>
                  <h6 class="badge badge-danger mb-2 text-light">${post.subreddit}</h6>
                  <img class="card-img-top" src="${image}" alt="Card image cap">
                  <p class="card-text">${truncateString(post.selftext, 100)}</p>
                  <a href="${post.url}" class="card-link" target="_blank">Visit Link</a>
                  <span class="badge badge-dark">Score: ${post.score}</span>
                </div>
              </div>
                `
            })
            output += '</div>';
            Results.innerHTML = output;

            document.getElementById("pag").style.display = "block";





        });



    // search reddit ends

}

function showMessage(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const searchContainer = document.getElementById('search-container');
    const search = document.getElementById('search');

    searchContainer.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 1000);

}


function truncateString(myString, limit) {
    const shortened = myString.indexOf(' ', limit);
    // console.log(shortened);
    if (shortened == -1) return myString;
    return myString.substring(0, shortened);
}
