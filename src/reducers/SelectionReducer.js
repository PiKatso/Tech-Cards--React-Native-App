export default (state, action) => {
  //switch statement informs what it does and action type
  switch (action.type) {
    case 'select_library': //handles action type
      return action.payload;
    default: //handles any action we don't caare about
      return state;
  }
};
