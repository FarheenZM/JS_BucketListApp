const makeRequest = function(url, callback){

  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

const requestComplete = function(){

  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);

  populateList(countries);
  renderCountry(countries);
  const createButton = document.querySelector("#submit-country");
  createButton.addEventListener("click", function(){
    addCountryButtonClicked(countries);
  });

}


const populateList = function(countries){
  let select = document.getElementById('select-country');

  countries.forEach(function(country, index){

    let option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
  });
}

const renderCountry = function (countries) {

  const selectedCountry = document.querySelector('select');

  selectedCountry.addEventListener('change', function(event) {

    let country = countries[this.value];

    // saveCountry(country);
    countryDetails(country);
  });

}


const countryDetails = function(country){
  const div = document.getElementById('div-country');
  // clearContent(div);

  const nameTag = document.createElement('p');
  nameTag.innerText = "Name: " + country.name;

  const capitalTag = document.createElement('p');
  capitalTag.innerText = "Country: " + country.capital;

  const populationTag = document.createElement('p');
  populationTag.innerText = "Population: " + country.population;

  const regionTag = document.createElement('p');
  regionTag.innerText = "Region: " + country.region;

  const imageTag = document.createElement('img');
  imageTag.src = country.flag;

  div.appendChild(nameTag);
  div.appendChild(capitalTag);
  div.appendChild(populationTag);
  div.appendChild(regionTag);
  div.appendChild(imageTag);

  // return div;

}


const addCountryButtonClicked = function(countries){
  // event.preventDefault();
  console.log("button clicked");
  const selectedValue = document.querySelector('#select-country').value;
  let country = countries[selectedValue]
  console.log(country);

};



const appStart = function(){
  console.log("It's working!");

  const url = 'https://restcountries.eu/rest/v2/all'
  makeRequest(url, requestComplete);
  // const createButton = document.querySelector("#submit-country");
  // createButton.addEventListener("click", addCountryButtonClicked);

};

document.addEventListener('DOMContentLoaded', appStart);
