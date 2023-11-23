const USER_STATE = {
  userData: [],
  userItem: null,
};

const UsersReducers = (state = USER_STATE, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      let userClone = action.payload;

      return {
        ...state,
        userData: userClone, 
      };

    case "USER_ITEM":
      let userItem = action.payload;

      return {
        ...state,
        userItem: userItem,
      };

    default:
      return state;
  }
};

export { UsersReducers };
