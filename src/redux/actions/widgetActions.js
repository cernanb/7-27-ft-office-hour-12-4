export const createWidget = (name) => {
  // This is where you will actually make the post request to create a new widget in your rails server
  return {
    type: "CREATE_WIDGET",
    payload: { name: name },
  };
};
