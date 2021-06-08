const joke = document.querySelector('#jokeContainer');

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      joke.innerHTML = data.joke
    );
};

window.onload = () => fetchJoke();

const less8000 = () => {
  const myPromise = new Promise((resolve, reject) => {
    const arr = [];
    for (let i = 0; i < 10; i += 1) {
      arr.push(Math.pow(Math.ceil(Math.random() * 50), 2));
    }
    const sum = arr.reduce((acc, item) => acc + item, 0);
    // console.log(sum);
    (sum < 8000) ? resolve(sum) : reject();
  })

  myPromise
  .then((sum) => [2, 3, 5, 10].map((item) => sum / item))
  .then((array) => array.reduce((acc, item) => acc + item, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

less8000();