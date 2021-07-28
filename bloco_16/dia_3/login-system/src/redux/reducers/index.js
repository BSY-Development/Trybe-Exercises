const INITIAL_STATE = {
  users: [{
    name: 'admin',
    email: 'admin@admin.com',
    age: 99,
    password: 'redux',
  }],
  user: {},
  isLogged: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTION_CADASTRAR':
      return { ...state, users: state.users.concat(action.payload) };
    case 'ACTION_LOGIN':
      return { ...state, isLogged: true, user: action.payload };
    case 'ACTION_LOGOUT':
      return { ...state, isLogged: false };
    default:
      return state;
  }
}

export default reducer;
