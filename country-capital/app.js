search = document.getElementById('search')
searchlist = document.getElementById('search-list')


const SearchCity = async (SearchText) => {
    // const url = 'http://techslides.com/demos/country-capitals.json';
    const res = await fetch('data.json')
    const capital = await res.json();


    let matches = capital.filter(state => {
        const regex = new RegExp(`^${SearchText}`, 'gi');
        return state.CountryName.match(regex);
    });


    if (SearchText.length === 0) {
        matches = [];

    }
    console.log(matches);

    UI(matches);
}


const UI = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1">
           <h4> ${match.CountryName} <span class="text-primary">Capital(${match.CapitalName}) </span> </h4>
           <h3> ${match.ContinentName} <span class="text-primary">(${match.CountryCode}) </span> </h4>  
        </div>
        `).join('');
        searchlist.innerHTML = html;
    }
    else if (matches.length == 0) {
        searchlist.innerHTML = "";
    }
}

search.addEventListener('input', () => SearchCity(search.value));