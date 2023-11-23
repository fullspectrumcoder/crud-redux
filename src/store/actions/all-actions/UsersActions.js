const fetchData = (users) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_USERS",
      payload: users,
    });
  };
};

const userItem = (users) => {
  return (dispatch) => {
    dispatch({
      type: "USER_ITEM",
      payload: users,
    });
  };
};

export { fetchData, userItem };
