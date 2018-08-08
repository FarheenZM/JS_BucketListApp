


const appStart = function(){
  console.log("It's working!");

  const url = 'https://restcountries.eu/rest/v2/all'
  makeRequest(url, requestComplete);
};

document.addEventListener('DOMContentLoaded', appStart);
