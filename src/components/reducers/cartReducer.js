const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let addedItem = action.item;

    let existed_item = state.addedItems.find(
      (item) => action.item.id === item.id
    );

    if (existed_item) {
      existed_item.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        itemsTotal: state.itemsTotal + 1,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        itemsTotal: state.itemsTotal + 1,
      };
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    let removeItem = action.item;

    let removeListItem = state.addedItems.find(
      (item) => action.item.id === item.id
    );

    let removeItemIndex = state.addedItems.indexOf(removeItem) - 1;

    if (removeListItem.quantity === 1) {
      removeListItem.quantity = 0;
      let newAddedItems = [...state.addedItems].splice(removeItemIndex, 1);
      return {
        ...state,
        addedItems: newAddedItems,
        total: state.total - removeListItem.price,
        itemsTotal: state.itemsTotal - 1,
      };
    } else {
      removeListItem.quantity -= 1;
      return {
        ...state,
        total: state.total - removeListItem.price,
        itemsTotal: state.itemsTotal - 1,
      };
    }
  } else {
    return state;
  }
};
export default cartReducer;
