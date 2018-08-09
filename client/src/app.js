const Request = require('./services/request.js');

const listAPIRequest = new Request('http://localhost:3000/api/listcountries')

const getBucketListRequestComplete = function(allBucketListItems){
  console.log(allBucketListItems);
}



const CountryDetailsView = require('./views/countryDetailsView');

const countryView = new CountryDetailsView();


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
    countryView.countryDetails(country);
  });

}


const addCountryButtonClicked = function(countries){
  // event.preventDefault();
  console.log("button clicked");
  const selectedValue = document.querySelector('#submit-country').value;
  let country = countries[selectedValue]
  console.log(country);
}



const appStart = function(){
  console.log("It's working!");

  listAPIRequest.get(getBucketListRequestComplete);

  const url = 'https://restcountries.eu/rest/v2/all'
  makeRequest(url, requestComplete);
  // const createButton = document.querySelector("#submit-country");
  // createButton.addEventListener("click", addCountryButtonClicked);

};

document.addEventListener('DOMContentLoaded', appStart);
