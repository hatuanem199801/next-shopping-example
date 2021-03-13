import useCookie from "../../libs/useCookie";
import { actionShopping } from "./action";
const CARD = "CARD";

const shopInitialState = {
  shopping: useCookie(CARD),
};

function removeShoppingCart(data) {
  let shoppings = shopInitialState.shopping;
  shoppings.filter((item) => item.product.id !== data.product.id);
  return shoppings;
}

function increment(data) {
  let shoppings = shopInitialState.shopping;
  let isExisted = shoppings.some((item) => item.product.id === data.product.id);
  if (isExisted) {
    shoppings.forEach((item) => {
      if (item.product.id === data.product.id) {
        item.quantity += 1;
      }
      return item;
    });
  }
  return shoppings;
}

function decrement(data) {
  let shoppings = shopInitialState.shopping;
  let isExisted = shoppings.some((item) => item.product.id === data.product.id);
  if (isExisted) {
    shoppings.forEach((item) => {
      if (item.product.id === data.product.id) {
        item.quantity -= 1;
      }
      return item;
    });
  }
  return shoppings;
}

function addShoppingCart(data) {
  let shoppings = shopInitialState.shopping;
  let isExisted = shoppings.some((item) => item.product.id === data.product.id);
  if (isExisted) {
    shoppings.forEach((item) => {
      if (item.product.id === data.product.id) {
        item.quantity += 1;
      }
      return item;
    });
  } else {
    shoppings.push(data);
  }
  return shoppings;
}

export default function reducer(state = shopInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionShopping.ADD:
      let shoppings = addShoppingCart(payload);
      Object.assign({}, state, {
        shopping: shoppings,
      });
      useCookie(CARD, shoppings);
    case actionShopping.FETCH:
      return useCookie(CARD);
    default:
      return state;
  }
}
