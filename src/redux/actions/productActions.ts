// src/redux/actions/productActions.ts
import {Dispatch} from 'redux';
import axios from 'axios';
import {ADD_TO_CART, CartActionTypes} from '../types/cartTypes';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number; // Add 'quantity' property to Product interface
}

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductActionTypes =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/benirvingplt/products/products',
      );
      dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: (error as Error).message,
      });
    }
  };
};

export const addToCart = (product: Product): CartActionTypes => ({
  type: ADD_TO_CART,
  payload: product,
});
