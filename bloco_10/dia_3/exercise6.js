const fetch = require('node-fetch');
const url = 'https://dog.ceo/api/breeds/image/random';

const requisition = () => {
  return fetch(url)
  .then(response => response.json()
  .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json))
  );
}

module.exports = {
  requisition,
}
