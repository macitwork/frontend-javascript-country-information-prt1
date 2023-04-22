

import axios, {getUrl} from "axios";

const countryList = document.getElementById("countries");
const errorMessage = document.getElementById("error-message");
 async function fetchCountries ()  {
    try { const response = await axios.get(url 'https://restcountries.com/v3.1/all?fields=name,flag,continents,region')
        console.log(response.data)

        countryList.innerHTML = `<li>The name of the first country in the array: ${ response.data[1].name.common }</li>`;
    } catch (e) {
        console.error(e);
        if (e.response.status === 404){
            errorMessage.textContent += "page not found | 404";
        } else if (e.response.status === 500)
        {
            errorMessage.textContent = "Internal server error | 500";
        }


    }
}


void fetchCountries();




