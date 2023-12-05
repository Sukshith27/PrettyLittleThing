// src/redux/types/cartTypes.ts
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: {
    id: number;
  };
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;
