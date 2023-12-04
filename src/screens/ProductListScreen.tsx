// src/screens/ProductListScreen.tsx
import React from 'react';
import {View, Text} from 'react-native';
import ProductList from '../components/ProductList';

const ProductListScreen: React.FC = () => {
  return (
    <View style={{backgroundColor: "blue", flex: 1}}>
      <Text>Product List Screen</Text>
      <ProductList />
    </View>
  );
};

export default ProductListScreen;
