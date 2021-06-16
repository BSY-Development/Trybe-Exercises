const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Realiza o exercicio 4', () => {
  it('Conferir se contem alguns itens.', () => {
    expect.assertions(2)
    return getRepos('https://api.github.com/orgs/tryber/repos').then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
