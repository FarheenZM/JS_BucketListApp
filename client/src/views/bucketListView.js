var BucketList = function() {
  this.country = [];

}

BucketList.prototype.addCountry = function (country) {
  this.country.push(country);
  this.render(country);
};

BucketList.prototype.clear = function (country) {
  this.country = [];
  const ul = document.querySelector('#BucketList')
  ul.innerText = '';
};

BucketList.prototype.render = function (country) {
  const ul = document.querySelector('#BucketList')
  const li = document.querySelector('li');
  const text = document.createElement('p');
  text.innerText = `${country.name}`
  li.appendChild(text);
  ul.appendChild(li);
};

module.exports = BucketList;
