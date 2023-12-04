// src/redux/reducers/productReducer.ts
import {
  ProductActionTypes,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../types/productTypes';

interface Product {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed
}

export interface ProductState {
  products: Product[];
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  error: null,
};

const productReducer = (
  state = initialState,
  action: ProductActionTypes,
): ProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
