function hydrate(text) {
  let water = 0;
  let restrictions = /\d+/g;
  let loopItem = restrictions.exec(text);
  while (loopItem != null) {
    water += parseInt(loopItem[0], 10);
    loopItem = restrictions.exec(text);
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  hydrate,
};
