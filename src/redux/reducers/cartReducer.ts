// src/redux/reducers/cartReducer.ts
import {
  CartActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../types/cartTypes';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes,
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? {...item, quantity: item.quantity + action.payload.quantity}
              : item,
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
