export const actionCadastrar = (payload) => {
  const actionPersonal = { type: 'ACTION_CADASTRAR', payload };
  return actionPersonal;
};

export const actionLogin = (payload) => {
  const actionPersonal = { type: 'ACTION_LOGIN', payload };
  return actionPersonal;
};

export const actionLogout = (payload) => {
  const actionPersonal = { type: 'ACTION_LOGOUT', payload };
  return actionPersonal;
};
