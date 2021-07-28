const INITIAL_STATE = {
  users: [],
  isLogged: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTION_CADASTRAR':
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default reducer;
