export const ProductReducer = (
  state = {
    product: [],
    cart: [],
    count: [],
    flag: false,
  },
  action
) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: [state.product, action.payload],
      };
    case "CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE":
      const filtered = state.cart.filter(
        (item, index) => index !== action.payload
      );
      return {
        ...state,
        cart: filtered,
      };
    case "AUTHEN":
      return {
        ...state,
        flag: action.payload,
      };
    case "add-count":
      return {
        ...state,
        count: [...state.count, action.payload],
      };
  }
  return state;
};
