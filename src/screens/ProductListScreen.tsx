// src/screens/ProductListScreen.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProductList from '../components/ProductList';

const ProductListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PRETTY LITTLE THINGS</Text>
      </View>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 12,
  },
  header: {
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
