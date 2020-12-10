function widgetReducer(
  state = [{ name: "First Widget" }, { name: "Second Widget" }],
  action
) {
  switch (action.type) {
    case "CREATE_WIDGET":
      return state.concat(action.payload);
    default:
      return state;
  }
}

export default widgetReducer;
