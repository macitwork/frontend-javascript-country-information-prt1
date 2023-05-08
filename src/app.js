
import axios from "axios";

const countryList = document.getElementById("countries")
async function fetchData() {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,continents");


        /*      for (i = 0; i < response.data; i++) {}        */
        /*      response.map((country) => {})                 */

        const countries = response.data;
        allCountries(response);
        buttons(countries);
    } catch (e) {
        console.error(e)
    }
}

fetchData();

function allCountries(countries) {
    countryList.innerHTML =
        countries.data.map((country) => {
            return `<li>
        <div class="landBox">
            <img src="${country.flags.png}" alt="this is the flag of ${country.name.common}"/>
                <div class="populationBox">
                    <h3 class="${fetchRegion(country.continents[0])}">${country.name.common}</h3>
                    <p>Has a population of ${country.population}</p>
                </div> 
            </div>
        </li>`;
        })
            .join("");
}

function fetchRegion(region) {
    switch (region) {
        case 'Africa':
            return 'blue';
        case 'North America':
            return 'darkgreen';
        case 'South America':
            return 'lightgreen';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        case 'Antarctica':
            return 'white';

    }
}

function buttons(countries) {
    const sortName = document.getElementById('sort-name');
    sortName.addEventListener("click", () => {
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        allCountries({data: countries});
    });

    const sortPopulation = document.getElementById('sort-population');
    sortPopulation.addEventListener("click", () => {
        countries.sort((a, b) => a.population - b.population);
        allCountries({data: countries});
    });


    const sortRegion = document.getElementById('sort-region');
    sortRegion.addEventListener("click", () => {
        countries.sort((a, b) => a.continents[0].localeCompare(b.continents[0]));
        allCountries({data: countries});
    });
}




