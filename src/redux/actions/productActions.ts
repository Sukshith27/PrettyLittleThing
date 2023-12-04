import {Dispatch} from 'redux';
import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Action creators
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: any) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

// Async action to fetch products
export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get('https://my-json-server.typicode.com/benirvingplt/products/product')
      .then(response => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
