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
  } else {
    return state;
  }
};
export default cartReducer;
