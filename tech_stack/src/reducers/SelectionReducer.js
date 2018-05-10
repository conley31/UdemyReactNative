export default (state = null, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'selected_library':
      return action.payload;
    default:
      return state;
  }
};
