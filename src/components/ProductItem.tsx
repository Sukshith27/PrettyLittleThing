// src/components/ProductItem.tsx
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
  onPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({product, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default ProductItem;
