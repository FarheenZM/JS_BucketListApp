const CountryDetailsView = function(){
};

CountryDetailsView.prototype.countryDetails = function(country){
  const div = document.getElementById('div-country');
  clearContent(div);

  const nameTag = document.createElement('p');
  nameTag.innerText = "Country : " + country.name;

  const capitalTag = document.createElement('p');
  capitalTag.innerText = "Capital : " + country.capital;

  const populationTag = document.createElement('p');
  populationTag.innerText = "Population : " + country.population;

  const regionTag = document.createElement('p');
  regionTag.innerText = "Region : " + country.region;

  const imageTag = document.createElement('img');
  imageTag.src = country.flag;

  div.appendChild(nameTag);
  div.appendChild(capitalTag);
  div.appendChild(populationTag);
  div.appendChild(regionTag);
  div.appendChild(imageTag);

  return div;

}

const clearContent = function(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  };
}

module.exports = CountryDetailsView;
