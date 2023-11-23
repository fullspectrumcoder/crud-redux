const PRODUCT_STATE = {
  datalist: [],
  itemView: null,
  itemKey: 0,
};

const ProductReducers = (state = PRODUCT_STATE, action) => {
  switch (action.type) {
    case "FETCH_LIST":
      let initList = action.payload;
      return {
        ...state,
        datalist: initList,
      };

    case "ADD_ITEM":
      let dataListClone = [...state.datalist];
      dataListClone.push(action.payload);
      let newList = JSON.stringify(dataListClone);
      localStorage.setItem("List", newList);

      return {
        ...state,
        datalist: dataListClone,
      };

    case "VIEW_ITEM":
      let viewItem = action.payload.item;
      let viewKey = action.payload.key;
      return {
        ...state,
        itemView: viewItem,
        itemKey: viewKey,
      };

    case "DELETE_ITEM":
      let deletedItem = [...state.datalist];
      deletedItem.splice(action.payload.key, 1);
      let newDataList = JSON.stringify(deletedItem);
      localStorage.setItem("List", newDataList);

      return {
        ...state,
        datalist: deletedItem,
      };

    case "UPDATE_ITEM":
      let listClone = [...state.datalist];
      let updatedList = listClone.filter(
        (i) => i.timeStamp !== action.payload.item.timeStamp
      );

      let listUpdate = [...updatedList, action.payload.updateItem];
      let newUpdateList = JSON.stringify(listUpdate);
      localStorage.setItem("List", newUpdateList);

      return {
        ...state,
        datalist: listUpdate,
      };

    default:
      return state;
  }
};

export { ProductReducers };
