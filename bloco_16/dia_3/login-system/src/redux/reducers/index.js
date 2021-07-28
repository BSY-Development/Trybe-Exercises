const INITIAL_STATE = {
  users: [],
  user: {},
  isLogged: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTION_CADASTRAR':
      return { ...state, users: state.users.concat(action.payload) };
    default:
      return state;
  }
}

export default reducer;
