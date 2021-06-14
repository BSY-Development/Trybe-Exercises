function challengeNine(characters, word, index) {
  for (let key in characters) {
    if (word[index] === key) {
      return characters[key];
    }
  }
  return word[index];
}

function encode(word) {
  let characters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let code = '';
  for (let index = 0; index < word.length; index += 1) {
    code += challengeNine(characters, word, index);
  }
  return code;
}

function decode(word) {
  let characters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decoding = '';
  for (let index = 0; index < word.length; index += 1) {
    decoding += challengeNine(characters, word, index);
  }
  return decoding;
}

module.exports = {
  decode,
  encode,
};