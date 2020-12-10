export const getGithubUser = (username) => {
  // Here I want to make an API call to the github api
  return function (dispatch) {
    return fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((user) => {
        console.log(user);
        dispatch({ type: "USER_FETCH_SUCCESSFUL", payload: user });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "USER_FETCH_ERROR", payload: "There was an error" });
      });
  };
};

// return {
//   type: "USER_FETCH_SUCCESSFUL",
//   payload: { username: "cernanb", bio: "developer" },
// };
