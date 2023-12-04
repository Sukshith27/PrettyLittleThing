// src/redux/store.js
import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers/productReducer';

export const RootState = rootReducer;

// Define thunk types
const ThunkType = thunk;

const store = createStore(rootReducer, applyMiddleware(ThunkType));

export default store;
