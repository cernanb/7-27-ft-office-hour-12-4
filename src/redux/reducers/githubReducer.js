function githubReducer(state = { users: [], error: "" }, action) {
  switch (action.type) {
    case "USER_FETCH_SUCCESSFUL":
      return { ...state, users: state.users.concat(action.payload) };
    case "USER_FETCH_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default githubReducer;
