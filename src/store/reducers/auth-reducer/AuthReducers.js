const USER_STATE = {
  userList: [],
};

const SignupReducer = (state = USER_STATE, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      let userClone = action.payload;

      return {
        ...state,
        userList: userClone,
      };

    case "ADD_USER":
      let userListClone = [...state.userList];
      userListClone.push(action.payload);
      let dataInStr = JSON.stringify(userListClone);
      localStorage.setItem("Users", dataInStr);

      return {
        ...state,
        userList: userListClone,
      };
    default:
      return state;
  }
};

const LOGIN_STATE = {
  userList: [],
  authData: null,
};

const LoginReducer = (state = LOGIN_STATE, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      let userClone = action.payload;

      return {
        ...state,
        userList: userClone,
      };
    case "LOGIN_USER":
      let authUser = action.payload;
      let dataInStr = JSON.stringify(authUser);
      localStorage.setItem("AuthenticatedUser", dataInStr);

      return {
        authData: authUser,
      };
    default:
      return state;
  }
};

export { SignupReducer, LoginReducer };
