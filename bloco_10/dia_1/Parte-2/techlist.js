function techList(technology, person) {
  if (technology.length < 1) return 'Vazio!';
  technology.sort();
  return technology.map((item) => ({
    tech: item,
    name: person,
  }));
}

module.exports = {
  techList,
};
