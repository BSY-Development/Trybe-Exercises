const joke = document.querySelector('#jokeContainer');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(data =>
      joke.innerHTML = data.joke
    );
};

window.onload = () => fetchJoke();

/* Then */
// const less8000 = () => {
//   const myPromise = new Promise((resolve, reject) => {
//     const arr = [];
//     for (let i = 0; i < 10; i += 1) {
//       arr.push(Math.pow(Math.ceil(Math.random() * 50), 2));
//     }
//     const sum = arr.reduce((acc, item) => acc + item, 0);
//     // console.log(sum);
//     (sum < 8000) ? resolve(sum) : reject();
//   })

//   myPromise
//   .then((sum) => [2, 3, 5, 10].map((item) => sum / item))
//   .then((array) => array.reduce((acc, item) => acc + item, 0))
//   .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
// }

// less8000();

/* Async await */

const createArray = () => {
  return Array.from({ length: 10 }, () => Math.pow(Math.ceil(Math.random() * 50), 2))
    .reduce((acc, item) => acc + item, 0);
}

const less8000 = () => {

  const myPromise = new Promise((resolve, reject) => {
    const sum = createArray();
    (sum < 8000) ? resolve(sum): reject('É mais de oito mil! Essa promise deve estar quebrada!');
  })

  const fetchPromise = async () => {
    try {
      const res = await myPromise;
      [2, 3, 5, 10].map((item) => res / item).reduce((acc, item) => acc + item, 0);
    } catch (error) {
      console.log(error);
    }
  }

  fetchPromise();
}

less8000();