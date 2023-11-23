const fetchLists = (list) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_LIST",
      payload: list,
    });
  };
};

const addItem = (list) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_ITEM",
      payload: list,
    });
  };
};

const viewProductItem = (item, key) => {
  return (dispatch) => {
    dispatch({
      type: "VIEW_ITEM",
      payload: {
        item: item,
        key: key,
      },
    });
  };
};

const deleteItem = (item, key) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        item: item,
        key: key,
      },
    });
  };
};

const updateProductItem = (updateItem, key, item) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        updateItem: updateItem,
        key: key,
        item: item,
      },
    });
  };
};

export { fetchLists, addItem, viewProductItem, deleteItem, updateProductItem };
