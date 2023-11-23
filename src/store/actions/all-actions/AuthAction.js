const addUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_USER",
      payload: data,
    });
  };
};

const loginUser = (email, password, name, img) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_USER",
      payload: {
        email: email,
        password: password,
        name: name,
        imgUrl: img,
      },
    });
  };
};

const dataList = (fetchData) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_USERS",
      payload: fetchData,
    });
  };
};
export { addUser, loginUser, dataList };
