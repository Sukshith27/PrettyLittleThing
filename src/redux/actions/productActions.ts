// src/redux/actions/productActions.ts
import {Dispatch} from 'redux';
import axios from 'axios';
import {
  ProductActionTypes,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../types/productTypes';

export const fetchProducts = () => {
  console.log('***====');
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/benirvingplt/products/products'
      );
      console.log('***', response);
      console.log('***', response.data);
      dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: (error as Error).message,
      });
    }
  };
};
